import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { ArticleHeaderModel } from 'src/_zswod/models/ArticleHeader';
import { RequestError, RequestStatus } from 'src/_zswod/utils/requestStatus';
import { fetchArticleHeadersAsyncThunk } from './thunks';

type InitialState = {
  status: RequestStatus;
  error: RequestError;
};

const entityAdapter = createEntityAdapter<ArticleHeaderModel>({
  sortComparer: (a, b) => new Date(a.createTime).getTime() - new Date(b.createTime).getTime(),
});

const initialState = entityAdapter.getInitialState<InitialState>({
  error: null,
  status: 'idle',
});

const slice = createSlice({
  name: 'articleHeaders',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchArticleHeadersAsyncThunk.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchArticleHeadersAsyncThunk.fulfilled, (state, action) => {
        state.status = 'success';
        entityAdapter.setAll(state, action.payload);
      })
      .addCase(fetchArticleHeadersAsyncThunk.rejected, (state, error) => {
        state.status = 'error';
      }),
});

const { reducer } = slice;
export { reducer, entityAdapter };
