import { createSlice } from '@reduxjs/toolkit';
import { RequestStatus } from 'src/_zswod/utils/requestStatus';

type CurrentGalleryState = {
  status: RequestStatus;
  error: string;
};

const initialState: CurrentGalleryState = {
  status: 'idle',
  error: '',
};

const slice = createSlice({
  name: 'currentGallery',
  initialState,
  reducers: {},
});

const { actions, reducer } = slice;

export { reducer as currentGalleryReducer, actions };
