import React from 'react';
import { fetchStreamsAction } from '../../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreamsAction();
  }

  showOptions = stream => {
    return (
      <div className="right floated content">
        <Link className="ui button primary" to={`/streams/edit/${stream.id}`}>
          Edit
        </Link>
        <Link
          className="ui button negative"
          to={`/streams/delete/${stream.id}`}
        >
          Delete
        </Link>
      </div>
    );
  };

  renderList = () => {
    const streamList = this.props.streams.map(stream => {
      if (stream)
        return (
          <div className="item" key={stream.id}>
            {stream.userID === this.props.userID
              ? this.showOptions(stream)
              : ''}
            <i className="large middle aligned icon camera" />
            <div className="content">
              {stream.title}
              <div className="description">{stream.description}</div>
            </div>
          </div>
        );
      else return null;
    });
    return streamList;
  };

  renderCreate = () => {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: 'right' }}>
          <Link className="ui button primary" to="/streams/create">
            {' '}
            Create a Stream{' '}
          </Link>
        </div>
      );
    }
  };

  render() {
    if (!this.props.streams.length) return null;
    return (
      <>
        <h2>List of Streams </h2>
        <div className="ui celled list"> {this.renderList()}</div>
        <div>{this.renderCreate()}</div>
      </>
    );
  }
}

const mapStateToProps = ({ streams, auth }) => {
  return {
    streams: Object.values(streams),
    userID: auth.userID,
    isSignedIn: auth.isSignedIn
  };
};

export default connect(
  mapStateToProps,
  { fetchStreamsAction }
)(StreamList);
