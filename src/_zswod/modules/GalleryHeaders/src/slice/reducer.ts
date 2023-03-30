import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { GalleryHeaderModel } from 'src/_zswod/models/GalleryHeader';
import { RequestStatus } from 'src/_zswod/utils/requestStatus';
import { fetchGalleryHeadersAsyncThunk } from './thunks';

type GalleryHeadersState = {
  status: RequestStatus;
  error: string;
};

const entityAdapter = createEntityAdapter<GalleryHeaderModel>();
const { getInitialState, getSelectors } = entityAdapter;

const initialState = getInitialState<GalleryHeadersState>({
  error: '',
  status: 'idle',
});

const slice = createSlice({
  name: 'galleryHeaders',
  initialState,
  reducers: {
    invalidateFetch: (state) => {
      state.status = 'idle';
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchGalleryHeadersAsyncThunk.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchGalleryHeadersAsyncThunk.fulfilled, (state, action) => {
        entityAdapter.setAll(state, action.payload);
        state.status = 'success';
      })
      .addCase(fetchGalleryHeadersAsyncThunk.rejected, (state) => {
        state.status = 'error';
      }),
});

const { actions, reducer } = slice;

export { reducer as galleryHeadersReducer, actions, getSelectors };
