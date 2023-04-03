import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'src/_zswod/redux/store';

const selectCurrentGalleryState = (rootState: RootState) => rootState.currentGallery;

const selectCurrentGalleryStatus = createSelector(
  selectCurrentGalleryState,
  ({ error, status }) => ({
    error,
    status,
  })
);

const selectCurrentGallery = createSelector(selectCurrentGalleryState, ({ gallery }) => gallery);

const selectCurrentGalleryId = createSelector(selectCurrentGallery, (gallery) => gallery?.id);

const selectCurrentGalleryImages = createSelector(
  selectCurrentGallery,
  (gallery) => gallery?.images ?? []
);

export {
  selectCurrentGallery,
  selectCurrentGalleryStatus,
  selectCurrentGalleryId,
  selectCurrentGalleryImages,
};
