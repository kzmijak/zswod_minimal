import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'src/_zswod/redux/store';
import { entityAdapter } from './reducer';

const { selectAll } = entityAdapter.getSelectors((state: RootState) => state.images);

const selectStatus = (state: RootState) => {
  const { error, status } = state.images;

  return {
    error,
    status,
  };
};

const selectModels = (limit?: number) =>
  createSelector(selectAll, (entities) => {
    if (!Boolean(entities)) return [];

    return entities.slice(0, limit);
  });

const selectArticleImages = (articleId: string, limit?: number) =>
  createSelector(selectModels(limit), (images) =>
    images.filter((image) => image.articleId === articleId)
  );

export { selectModels, selectStatus, selectArticleImages };
