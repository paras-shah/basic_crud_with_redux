import streams from '../api/streams';
import history from '../history';

export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';

export const CREATE_STREAM = 'CREATE_STREAM';
export const FETCH_STREAM = 'FETCH_STREAM';
export const FETCH_STREAMS = 'FETCH_STREAMS';
export const EDIT_STREAM = 'EDIT_STREAM';
export const DELETE_STREAM = 'DELETE_STREAM';

const signInAction = userID => {
  return {
    type: SIGN_IN,
    payload: { isSignedIn: true, userID }
  };
};

const signOutAction = () => {
  return {
    type: SIGN_OUT,
    payload: { isSignedIn: false, userID: null }
  };
};

export { signInAction, signOutAction };

export const createStreamAction = (formValues, userID) => async (
  dispatch,
  getState
) => {
  const { userID } = getState().auth;
  const response = await streams.post('/streams', { ...formValues, userID });
  dispatch({
    type: CREATE_STREAM,
    payload: response.data
  });
  history.push('/streams/');
};

export const fetchStreamsAction = () => async dispatch => {
  const response = await streams.get('/streams');
  dispatch({
    type: FETCH_STREAMS,
    payload: response.data
  });
};

export const fetchStreamAction = id => async dispatch => {
  const response = await streams.get(`/streams/${id}`);
  dispatch({
    type: FETCH_STREAM,
    payload: response.data
  });
};

export const editStreamAction = (id, formValues) => async (
  dispatch,
  getState
) => {
  const response = await streams.patch(`/streams/${id}`, {
    ...formValues
  });
  dispatch({
    type: EDIT_STREAM,
    payload: response.data
  });
  history.push('/streams/');
};

export const deleteStreamAction = id => async dispatch => {
  await streams.delete(`/streams/${id}`);
  dispatch({
    type: DELETE_STREAM,
    payload: id
  });
};
