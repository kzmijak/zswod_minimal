import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'src/_zswod/redux/store';
import { entityAdapter } from './reducer';

const selectArticleHeadersStatus = (state: RootState) => {
  const { status, error } = state.articleHeaders;
  return { status, error };
};

const { selectAll } = entityAdapter.getSelectors((state: RootState) => state.articleHeaders);

const selectAllArticleHeaders = createSelector(selectAll, (entities) => {
  if (!Boolean(entities)) return [];

  return entities;
});

const selectArticleHeadersImages = createSelector(
  [selectAllArticleHeaders, (_state, limit?: number) => limit],
  (headers, limit) => headers.flatMap((header) => header.images).slice(0, limit)
);

const selectLatestArticleHeader = createSelector(selectAllArticleHeaders, (headers) =>
  [...headers].shift()
);

export {
  selectArticleHeadersStatus,
  selectAllArticleHeaders,
  selectArticleHeadersImages,
  selectLatestArticleHeader,
};
