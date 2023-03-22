import { createSlice } from '@reduxjs/toolkit';
import { ArticleModel, nullArticleObject } from 'src/_zswod/models/Article';
import { RequestStatus } from 'src/_zswod/utils/requestStatus';
import { getFetchArticleError } from '../api/fetchArticle';
import { fetchArticleAsyncThunk } from './thunks';

type InitialState = {
  status: RequestStatus;
  error: string;
  article: ArticleModel;
};

const initialState: InitialState = {
  article: nullArticleObject,
  error: '',
  status: 'idle',
};

const slice = createSlice({
  name: 'article',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchArticleAsyncThunk.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchArticleAsyncThunk.fulfilled, (state, action) => {
        state.status = 'success';
        state.article = action.payload;
      })
      .addCase(fetchArticleAsyncThunk.rejected, (state, action) => {
        state.status = 'error';
        state.error = getFetchArticleError(action.error);
      }),
});

const { actions, reducer } = slice;

export { actions, reducer as currentArticleReducer };
