import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { BlobModel } from 'src/_zswod/models/Blob';
import { RequestStatus } from 'src/_zswod/utils/requestStatus';
import { getGetBlobsError } from '../api/getBlobs';
import { getUploadBlobError } from '../api/uploadBlob';
import { fetchMoreBlobsAsyncThunk, uploadBlobsAsyncThunk } from './thunks';

type InitialState = {
  status: RequestStatus;
  error: string;
  nextOffset: number;
  eof: boolean;
};

const entityAdapter = createEntityAdapter<BlobModel>({
  sortComparer: (a, b) => new Date(b.createTime).getTime() - new Date(a.createTime).getTime(),
});

const initialState = entityAdapter.getInitialState<InitialState>({
  error: '',
  status: 'idle',
  nextOffset: 0,
  eof: false,
});

const slice = createSlice({
  name: 'blobs',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchMoreBlobsAsyncThunk.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMoreBlobsAsyncThunk.fulfilled, (state, action) => {
        const { blobs, eof } = action.payload;

        entityAdapter.upsertMany(state, blobs);
        state.eof = eof;
        state.nextOffset += blobs.length;
        state.status = 'success';
      })
      .addCase(fetchMoreBlobsAsyncThunk.rejected, (state, action) => {
        state.error = getGetBlobsError(action.payload);
        state.status = 'error';
      })
      .addCase(uploadBlobsAsyncThunk.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(uploadBlobsAsyncThunk.fulfilled, (state, action) => {
        entityAdapter.upsertMany(state, action.payload);
        state.nextOffset += action.payload.length;
        state.status = 'success';
      })
      .addCase(uploadBlobsAsyncThunk.rejected, (state, action) => {
        state.error = getUploadBlobError(action.payload);
        state.status = 'error';
      }),
});

const { reducer, actions } = slice;

export { reducer, actions, entityAdapter };
