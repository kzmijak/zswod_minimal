import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'src/_zswod/redux/store';

const selectCurrentArticleState = (state: RootState) => state.currentArticle;

const selectCurrentArticleStatus = createSelector(
  selectCurrentArticleState,
  ({ status, error }) => ({
    status,
    error,
  })
);

const selectCurrentArticle = createSelector(selectCurrentArticleState, (state) => state.article);

const currentArticleGallery = createSelector(selectCurrentArticle, (article) => article.gallery);

const selectCurrentArticleImages = createSelector(
  currentArticleGallery,
  (gallery) => gallery.images
);

const selectCurrentArticlePreview = createSelector(selectCurrentArticleImages, (images) =>
  images.find((image) => image.order === 0)
);

export {
  selectCurrentArticle,
  selectCurrentArticleStatus,
  selectCurrentArticleImages,
  selectCurrentArticlePreview,
};
