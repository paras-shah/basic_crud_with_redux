import React from 'react';
import Modal from '../Modal';
import history from '../../history';
import { deleteStreamAction, fetchStreamAction } from '../../actions';
import { connect } from 'react-redux';

class StreamDelete extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.fetchStreamAction(id);
  }

  renderActions = id => {
    return (
      <>
        <div
          className="ui negative button"
          onClick={() => {
            this.props.deleteStreamAction(id);
          }}
        >
          Delete{' '}
        </div>
        <div className="ui  button" onClick={() => history.push('/')}>
          Cancel
        </div>
      </>
    );
  };

  renderContent = () => {
    if (!this.props.stream) return 'Are you sure';
    else {
      return `Are you sure to delete ${this.props.stream.title}`;
    }
  };

  render() {
    return (
      <div>
        StreamDelete
        <Modal
          title="header"
          content={this.renderContent()}
          actions={this.renderActions(this.props.match.params.id)}
          onDismiss={() => history.push('/')}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ streams }, ownProps) => {
  return { stream: streams[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { deleteStreamAction, fetchStreamAction }
)(StreamDelete);
