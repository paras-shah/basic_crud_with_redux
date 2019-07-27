import React from 'react';
import { connect } from 'react-redux';
import { editStreamAction, fetchStreamAction } from '../../actions';
import StreamForm from './StreamForm';

class StreamEdit extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.fetchStreamAction(id);
  }

  onSubmit = formValues => {
    this.props.editStreamAction(this.props.match.params.id, formValues);
  };

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }

    return (
      <>
        <h3>Edit Stream</h3>

        <StreamForm
          initialValues={{
            title: this.props.stream.title,
            description: this.props.stream.description
          }}
          onRenderPropSubmit={formValues => {
            this.onSubmit(formValues);
          }}
        />
      </>
    );
  }
}

const mapStateToProps = ({ streams }, ownProps) => {
  return { stream: streams[ownProps.match.params.id] };
};

const mapDispatchToProps = dispatch => {
  return {
    editStreamAction: function(id, formValues) {
      dispatch(editStreamAction(id, formValues));
    },
    fetchStreamAction: function(id) {
      dispatch(fetchStreamAction(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StreamEdit);
