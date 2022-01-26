import { combineReducers } from 'redux';
import { imageReducer } from './Image/reducer';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { articleReducer } from './article/reducer';

// ----------------------------------------------------------------------

const rootPersistConfig = {
  key: 'root',
  storage: storage,
  keyPrefix: 'redux-',
  version: 1,
  whitelist: ['images'],
};

const rootReducer = combineReducers({
  image: imageReducer,
  article: articleReducer,
});

export { rootReducer, rootPersistConfig };
