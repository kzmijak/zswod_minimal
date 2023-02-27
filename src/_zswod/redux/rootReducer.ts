import { combineReducers } from 'redux';
import { articleHeadersReducer } from '../modules/ArticleHeaders';
import { blobsReducer } from '../modules/Blob';
import { configReducer } from '../modules/Config';
import { currentArticleReducer } from '../modules/CurrentArticle';
import { userReducer } from '../modules/User';

const rootReducer = combineReducers({
  articleHeaders: articleHeadersReducer,
  config: configReducer,
  blobs: blobsReducer,
  currentArticle: currentArticleReducer,
  user: userReducer,
});

export { rootReducer };
