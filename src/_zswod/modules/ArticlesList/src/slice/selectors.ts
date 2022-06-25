import { createSelector } from '@reduxjs/toolkit';
import { ArticleHeaderModel } from 'src/_zswod/models/ArticleHeader';
import { RootState } from 'src/_zswod/redux/store';
import { entityAdapter } from './reducer';

const selectStatus = (state: RootState) => {
  const { status, error } = state.articleHeadersReducer;
  return { status, error };
};

const { selectEntities } = entityAdapter.getSelectors();

const selectModels = createSelector(
  selectEntities,
  (entities) => Object.values(entities).filter((entity) => !Boolean(entity)) as ArticleHeaderModel[]
);

export { selectStatus, selectModels };
