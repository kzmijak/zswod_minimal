import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { galleryReducer } from './gallery/reducer';
import { newsReducer } from './news/reducer';

// ----------------------------------------------------------------------

const rootPersistConfig = {
  key: 'root',
  storage: storage,
  keyPrefix: 'redux-',
  version: 1,
  whitelist: ['images'],
};

const rootReducer = combineReducers({
  gallery: galleryReducer,
  news: newsReducer,
});

export { rootReducer, rootPersistConfig };
