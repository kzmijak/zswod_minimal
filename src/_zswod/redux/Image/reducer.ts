import { getAxiosLoadableInstance } from 'src/_zswod/utils/AxiosLoadable';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Image } from '../../models/Image/image';

const initialState = getAxiosLoadableInstance<Image>();

const slice = createSlice({
  name: 'image',
  initialState,
  reducers: {
    startLoading(state) {
      state.isLoading = true;
      state.isLoaded = false;
    },
    hasError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.isLoaded = true;
      state.error = action.payload;
    },
    getImagesSuccess(state, action: PayloadAction<Image[]>) {
      state.isLoading = false;
      state.isLoaded = true;
      state.data = action.payload;
    },
  },
});

const imageReducer = slice.reducer;
export { imageReducer, slice };
