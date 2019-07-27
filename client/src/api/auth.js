import React from 'react';
import { connect } from 'react-redux';
import { googleAPIID } from '../cred';
import { signInAction, signOutAction } from '../actions/index';

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId: googleAPIID,
          scope: 'email'
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange();
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = () => {
    this.auth.isSignedIn.get()
      ? this.props.signInAction(this.auth.currentUser.get().getId())
      : this.props.signOutAction();
  };

  renderAuthButton = () => {
    if (this.props.isSignedIn === null) return '';
    else if (this.props.isSignedIn)
      return (
        <button onClick={this.onSignedOut} className="ui red google button">
          <i className="google icon" />
          Sign Out
        </button>
      );
    else
      return (
        <button onClick={this.onSignedIn} className="ui red google button">
          <i className="google icon" />
          Sign In With google
        </button>
      );
  };

  onSignedIn = () => {
    this.auth.signIn();
  };

  onSignedOut = () => {
    this.auth.signOut();
  };

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = ({ auth }) => {
  return { isSignedIn: auth.isSignedIn };
};

const mapDispatchToActions = dispatch => {
  return {
    signInAction: function(userID) {
      dispatch(signInAction(userID));
    },
    signOutAction: function() {
      dispatch(signOutAction());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToActions
)(GoogleAuth);

/*export default connect(
  mapStateToProps,
  { signInAction, signOutAction }
)(GoogleAuth);*/
