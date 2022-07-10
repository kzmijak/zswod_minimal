import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import { articleHeadersReducer } from '../modules/ArticlesList';
import { imagesReducer } from '../modules/Images';

const rootPersistConfig = {
  key: 'root',
  storage: storage,
  keyPrefix: 'redux-',
  version: 1,
  whitelist: ['images'],
};

const rootReducer = combineReducers({
  articleHeaders: articleHeadersReducer,
  images: imagesReducer,
});

export { rootReducer, rootPersistConfig };
