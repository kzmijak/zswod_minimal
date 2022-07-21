import { createSlice } from '@reduxjs/toolkit';
import { ArticleModel, nullArticleObject } from 'src/_zswod/models/Article';
import { RequestError, RequestStatus } from 'src/_zswod/utils/requestStatus';
import { fetchArticle } from './actions';

type InitialState = {
  article: ArticleModel;
  status: RequestStatus;
  error: RequestError;
};

const initialState: InitialState = {
  article: nullArticleObject,
  error: null,
  status: 'idle',
};

const slice = createSlice({
  name: 'article',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchArticle.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchArticle.fulfilled, (state, action) => {
        state.status = 'success';
        state.article = action.payload;
      })
      .addCase(fetchArticle.rejected, (state) => {
        state.status = 'error';
      }),
});

const { actions, reducer } = slice;

export { actions, reducer };
