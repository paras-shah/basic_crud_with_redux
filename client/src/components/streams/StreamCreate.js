import React from 'react';
import { createStreamAction } from '../../actions';
import { connect } from 'react-redux';
import StreamForm from './StreamForm';

class StreamCreate extends React.Component {
  onSubmit = formValues => {
    this.props.createStreamAction(formValues, this.props.userID);
  };

  render() {
    return (
      <>
        <h2 />
        <StreamForm
          onRenderPropSubmit={formValues => {
            this.onSubmit(formValues);
          }}
        />
      </>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { userID: auth.userID };
};

export default connect(
  mapStateToProps,
  { createStreamAction }
)(StreamCreate);
