import {
  CREATE_STREAM,
  FETCH_STREAM,
  FETCH_STREAMS,
  EDIT_STREAM,
  DELETE_STREAM
} from '../actions';
//import _ from 'underscore';

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_STREAM:
      return { ...state, [action.payload]: undefined };
    //_.omit(state,payload);
    case FETCH_STREAMS:
      let newStreamsArrayObject = {};
      action.payload.forEach(newStream => {
        newStreamsArrayObject = {
          ...newStreamsArrayObject,
          [newStream.id]: newStream
        };
      });
      /* _.mapKeys([{id:,title:},{}],id)
      {...state, ...(action.payload,'id') */
      return { ...state, ...newStreamsArrayObject };
    default:
      return state;
  }
};
