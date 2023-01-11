import { combineReducers } from 'redux';
import { articleHeadersReducer } from '../modules/ArticleHeaders';
import { configReducer } from '../modules/Config';

const rootReducer = combineReducers({
  articleHeaders: articleHeadersReducer,
  config: configReducer,
});

export { rootReducer };
