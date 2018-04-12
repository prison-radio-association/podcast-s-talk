import { createStore, combineReducers } from 'redux';
import { reducer as jPlayers } from 'react-jplayer';
import media from '../reducers/media';
import navigation from '../reducers/navigation';

const rootReducer = combineReducers({ media, navigation, jPlayers });

export default (initialState = {}, devtool) => createStore(
  rootReducer,
  initialState,
  devtool,
);
