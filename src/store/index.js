import { createStore, combineReducers } from 'redux';
import media from '../reducers/media';
import navigation from '../reducers/navigation';

const rootReducer = combineReducers({ media, navigation });

export default (initialState = {}) => createStore(rootReducer, initialState);
