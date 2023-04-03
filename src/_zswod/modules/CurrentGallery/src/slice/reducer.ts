import { createSlice } from '@reduxjs/toolkit';
import { GalleryModel } from 'src/_zswod/models/Gallery';
import { RequestStatus } from 'src/_zswod/utils/requestStatus';
import { fetchGalleryAsyncThunk } from './thunks';

type CurrentGalleryState = {
  status: RequestStatus;
  error: string;
  gallery: GalleryModel | undefined;
};

const initialState: CurrentGalleryState = {
  status: 'idle',
  error: '',
  gallery: undefined,
};

const slice = createSlice({
  name: 'currentGallery',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchGalleryAsyncThunk.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchGalleryAsyncThunk.fulfilled, (state, action) => {
        state.status = 'success';
        state.gallery = action.payload;
      })
      .addCase(fetchGalleryAsyncThunk.rejected, (state, action) => {
        state.status = 'error';
      }),
});

const { actions, reducer } = slice;

export { reducer as currentGalleryReducer, actions };
