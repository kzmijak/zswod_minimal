import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { ArticleHeaderModel } from 'src/_zswod/models/ArticleHeader';
import { RequestError, RequestStatus } from 'src/_zswod/utils/requestStatus';
import { fetchArticleHeadersAsyncThunk, removeArticleAsyncThunk } from './thunks';

type InitialState = {
  status: RequestStatus;
  error: RequestError;
};

const entityAdapter = createEntityAdapter<ArticleHeaderModel>({
  sortComparer: (a, b) => new Date(b.createTime).getTime() - new Date(a.createTime).getTime(),
});

const initialState = entityAdapter.getInitialState<InitialState>({
  error: null,
  status: 'idle',
});

const slice = createSlice({
  name: 'articleHeaders',
  initialState,
  reducers: {
    invalidateFetch: (state) => {
      state.status = 'idle';
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchArticleHeadersAsyncThunk.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchArticleHeadersAsyncThunk.fulfilled, (state, action) => {
        state.status = 'success';
        entityAdapter.setAll(state, action.payload);
      })
      .addCase(fetchArticleHeadersAsyncThunk.rejected, (state) => {
        state.status = 'error';
      })
      .addCase(removeArticleAsyncThunk.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(removeArticleAsyncThunk.fulfilled, (state, action) => {
        state.status = 'success';
        entityAdapter.removeOne(state, action.payload);
      })
      .addCase(removeArticleAsyncThunk.rejected, (state) => {
        state.status = 'error';
      }),
});

const { reducer, actions } = slice;
export { reducer, actions, entityAdapter };
