import { SIGN_IN, SIGN_OUT } from '../actions';
const INITIAL_STATE = {
  isSignedIn: null,
  userID: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, isSignedIn: action.payload.isSignedIn };
    case SIGN_OUT:
      return { ...state, isSignedIn: action.payload.isSignedIn };

    default:
      return state;
  }
};
