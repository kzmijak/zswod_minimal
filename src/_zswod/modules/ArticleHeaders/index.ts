import { reducer as articleHeadersReducer } from './src/slice/reducer';
import { FetchArticleHeaders } from './src/components/FetchArticleHeaders';
import {
  selectAllArticleHeaders,
  selectArticleHeadersStatus,
  selectLatestArticleHeader,
} from './src/slice/selectors';
import { fetchArticleHeadersAsyncThunk } from './src/slice/thunks';

export {
  articleHeadersReducer,
  fetchArticleHeadersAsyncThunk,
  selectArticleHeadersStatus,
  selectAllArticleHeaders,
  FetchArticleHeaders,
  selectLatestArticleHeader,
};
