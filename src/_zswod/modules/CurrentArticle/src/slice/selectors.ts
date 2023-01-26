import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'src/_zswod/redux/store';
import { entitySelectors } from './reducer';

const { selectAll } = entitySelectors;

const selectCurrentArticleState = (state: RootState) => state.currentArticle;

const selectCurrentArticleStatus = createSelector(
  selectCurrentArticleState,
  ({ status, error }) => ({
    status,
    error,
  })
);

const selectCurrentArticle = createSelector(selectCurrentArticleState, (state) => state.article);

const selectCurrentArticleImages = createSelector(selectCurrentArticleState, (state) => {
  const images = selectAll(state);
  return images;
});

const selectCurrentArticlePreview = createSelector(selectCurrentArticleImages, (images) =>
  images.find((image) => image.isPreview)
);

export {
  selectCurrentArticle,
  selectCurrentArticleStatus,
  selectCurrentArticleImages,
  selectCurrentArticlePreview,
};
