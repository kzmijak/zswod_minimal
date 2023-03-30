import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'src/_zswod/redux/store';
import { getSelectors } from './reducer';

const { selectAll: selectAllGalleryHeaders } = getSelectors(
  (rootState: RootState) => rootState.galleryHeaders
);

const selectGalleryHeadersState = (rootState: RootState) => rootState.galleryHeaders;

const selectGalleryHeadersStatus = createSelector(
  selectGalleryHeadersState,
  ({ status, error }) => ({
    status,
    error,
  })
);

export { selectAllGalleryHeaders, selectGalleryHeadersStatus };
