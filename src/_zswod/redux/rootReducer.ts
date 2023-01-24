import { combineReducers } from 'redux';
import { articleHeadersReducer } from '../modules/ArticleHeaders';
import { blobsReducer } from '../modules/Blob';
import { configReducer } from '../modules/Config';

const rootReducer = combineReducers({
  articleHeaders: articleHeadersReducer,
  config: configReducer,
  blobs: blobsReducer,
});

export { rootReducer };
