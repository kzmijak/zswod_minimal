import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { ImageModel } from 'src/_zswod/models/Image';
import { fetchImages } from './actions';

type InitialState = {
  status: 'idle' | 'loading' | 'success' | 'error';
  error: string | null;
};

const entityAdapter = createEntityAdapter<ImageModel>({
  selectId: (image) => image.imageGuid,
});

const initialState = entityAdapter.getInitialState<InitialState>({
  error: null,
  status: 'idle',
});

const slice = createSlice({
  name: 'images',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchImages.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchImages.fulfilled, (state, action) => {
        state.status = 'success';
        entityAdapter.setAll(state, action.payload);
      })
      .addCase(fetchImages.rejected, (state) => {
        state.status = 'error';
      }),
});

const { reducer, actions } = slice;

export { reducer, actions, entityAdapter };