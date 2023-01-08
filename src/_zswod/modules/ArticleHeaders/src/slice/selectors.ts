import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'src/_zswod/redux/store';
import { entityAdapter } from './reducer';

const selectStatus = (state: RootState) => {
  const { status, error } = state.articleHeaders;
  return { status, error };
};

const { selectAll } = entityAdapter.getSelectors((state: RootState) => state.articleHeaders);

const selectModels = createSelector(selectAll, (entities) => {
  if (!Boolean(entities)) return [];

  return entities;
});

export { selectStatus, selectModels };
