import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { GalleryHeaderModel } from 'src/_zswod/models/GalleryHeader';
import { RequestStatus } from 'src/_zswod/utils/requestStatus';

type GalleryHeadersState = {
  status: RequestStatus;
  error: string;
};

const { getInitialState, getSelectors } = createEntityAdapter<GalleryHeaderModel>();

const initialState = getInitialState<GalleryHeadersState>({
  error: '',
  status: 'idle',
});

const slice = createSlice({
  name: 'galleryHeaders',
  initialState,
  reducers: {},
});

const { actions, reducer } = slice;

export { reducer as galleryHeadersReducer, actions, getSelectors };
