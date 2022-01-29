import { getAxiosLoadableInstance } from 'src/_zswod/utils/AxiosLoadable';
import { Image } from 'src/_zswod/utils/Mock/images';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = getAxiosLoadableInstance<Image>();

const slice = createSlice({
  name: 'image',
  initialState,
  reducers: {
    startLoading(state) {
      state.isLoading = true;
    },
    hasError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    getImagesSuccess(state, action: PayloadAction<Image[]>) {
      state.isLoading = false;
      state.data = action.payload;
    },
  },
});

const imageReducer = slice.reducer;
export { imageReducer, slice };
