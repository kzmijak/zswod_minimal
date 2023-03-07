import { createSelector } from '@reduxjs/toolkit';
import { ArticleHeaderModel } from 'src/_zswod/models/ArticleHeader';

const getPreviewImage = createSelector(
  (header: ArticleHeaderModel | undefined) => header,
  (header) => (Boolean(header) ? [...header!.images].shift() : undefined)
);

export { getPreviewImage };
