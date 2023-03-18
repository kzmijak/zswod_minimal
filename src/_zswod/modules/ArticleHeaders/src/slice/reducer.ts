import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { ArticleHeaderModel } from 'src/_zswod/models/ArticleHeader';
import { fetchArticleAsyncThunk } from 'src/_zswod/modules/CurrentArticle/src/slice/thunks';
import { RequestError, RequestStatus } from 'src/_zswod/utils/requestStatus';
import { fetchArticleHeadersAsyncThunk } from './thunks';

type InitialState = {
  status: RequestStatus;
  error: RequestError;
};

const entityAdapter = createEntityAdapter<ArticleHeaderModel>({
  sortComparer: (a, b) => new Date(a.uploadDate).getTime() - new Date(b.uploadDate).getTime(),
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
        console.log(error);
        state.status = 'error';
      }),
});

const { reducer } = slice;
export { reducer, entityAdapter };
