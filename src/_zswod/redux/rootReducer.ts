import { combineReducers } from 'redux';
import { articleReducer } from '../modules/Article';
import { articleHeadersReducer } from '../modules/ArticlesList';
import { configReducer } from '../modules/Config';
import { imagesReducer } from '../modules/Images';

const rootReducer = combineReducers({
  articleHeaders: articleHeadersReducer,
  images: imagesReducer,
  article: articleReducer,
  config: configReducer,
});

export { rootReducer };
