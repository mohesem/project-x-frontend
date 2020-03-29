import {combineReducers} from 'redux';

const mediaReducer = (state = null, action) => {
  switch (action.type) {
    case 'SET_MEDIA':
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  media: mediaReducer,
});
