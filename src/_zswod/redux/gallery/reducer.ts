import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type GalleryState = {
  previousGallery: number | null;
  openedGallery: number | null;
  inTransition: boolean;
};

const initialState: GalleryState = {
  previousGallery: null,
  openedGallery: null,
  inTransition: false,
};

const slice = createSlice({
  name: 'gallery',
  initialState: initialState,
  reducers: {
    startTransition(state) {
      state.previousGallery = state.openedGallery;
      state.openedGallery = null;
      state.inTransition = true;
    },
    endTransition(state, value: PayloadAction<number | null>) {
      state.inTransition = false;
      state.openedGallery = value.payload;
    },
  },
});

const galleryReducer = slice.reducer;
export { galleryReducer, slice };
