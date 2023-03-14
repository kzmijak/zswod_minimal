import { createSlice } from '@reduxjs/toolkit';
import { GalleryModel } from 'src/_zswod/models/Gallery';
import { RequestStatus } from 'src/_zswod/utils/requestStatus';

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
});

const { actions, reducer } = slice;

export { reducer as currentGalleryReducer, actions };
