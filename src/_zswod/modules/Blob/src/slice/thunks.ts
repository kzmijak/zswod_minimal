import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from 'src/_zswod/redux/store';
import { getBlobs } from '../api/getBlobs';
import { uploadBlobs } from '../api/uploadBlob';
import { selectBlobsState } from './selectors';

const fetchMoreBlobsAsyncThunk = createAsyncThunk('blobs/get-blobs', async (_, { getState }) => {
  const rootState = getState() as RootState;
  const nextOffset = selectBlobsState(rootState).nextOffset as number;

  const response = await getBlobs(20, nextOffset);
  return response;
});

const uploadBlobsAsyncThunk = createAsyncThunk('blobs/upload', async (files: File[]) => {
  const blobs = await uploadBlobs(files);
  return blobs;
});

export { fetchMoreBlobsAsyncThunk, uploadBlobsAsyncThunk };
