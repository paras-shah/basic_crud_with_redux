export const SIGN_IN = 'SIGN IN';
export const SIGN_OUT = 'SIGN OUT';

const signInAction = userID => {
  return {
    type: SIGN_IN,
    payload: { isSignedIn: true, userID }
  };
};

const signOutAction = userID => {
  return {
    type: SIGN_OUT,
    payload: { isSignedIn: false, userID: null }
  };
};

export { signInAction, signOutAction };
