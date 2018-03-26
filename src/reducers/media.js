import { TRACK_PLAYED, MEDIA_PLAYING, MEDIA_PAUSED, MEDIA_LOADING } from '../actions';

const initialState = {
  src: null,
  playing: false,
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TRACK_PLAYED:
      return {
        ...state,
        src: action.payload,
      };
      break;

    case MEDIA_PLAYING:
      return {
        ...state,
        playing: true,
        loading: false,
      };
      break;

    case MEDIA_PAUSED:
      return {
        ...state,
        playing: false,
      };
      break;

    case MEDIA_LOADING:
      return {
        ...state,
        loading: true,
      }
      break;

    default:
      return state;
  }
};