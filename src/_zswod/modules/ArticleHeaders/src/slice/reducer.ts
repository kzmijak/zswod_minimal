import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { ArticleHeaderModel } from 'src/_zswod/models/ArticleHeader';
import { RequestError, RequestStatus } from 'src/_zswod/utils/requestStatus';
import { fetch } from './actions';

type InitialState = {
  status: RequestStatus;
  error: RequestError;
};

const entityAdapter = createEntityAdapter<ArticleHeaderModel>();

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
      .addCase(fetch.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetch.fulfilled, (state, action) => {
        state.status = 'success';
        entityAdapter.setAll(state, action.payload);
      })
      .addCase(fetch.rejected, (state) => {
        state.status = 'error';
      }),
});

const { reducer } = slice;
export { reducer, entityAdapter };