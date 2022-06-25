import { reducer as articleHeadersReducer } from './src/slice/reducer';
import { fetch as fetchArticleHeaders } from './src/slice/actions';
import {
  selectStatus as selectArticleHeadersStatus,
  selectModels as selectArticleHeaders,
} from './src/slice/selectors';
import { FetchArticleHeaders } from './src/components/FetchArticleHeaders';

export {
  articleHeadersReducer,
  fetchArticleHeaders,
  selectArticleHeadersStatus,
  selectArticleHeaders,
  FetchArticleHeaders,
};
