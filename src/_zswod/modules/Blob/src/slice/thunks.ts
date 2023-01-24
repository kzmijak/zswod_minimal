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

type UploadBlobsAsyncThunkParams = {
  files: File[];
  dropId: string;
};

const uploadBlobsAsyncThunk = createAsyncThunk(
  'blobs/upload',
  async ({ files, dropId }: UploadBlobsAsyncThunkParams) => {
    const blobs = await uploadBlobs(files, dropId);
    return blobs;
  }
);

export { fetchMoreBlobsAsyncThunk, uploadBlobsAsyncThunk };
