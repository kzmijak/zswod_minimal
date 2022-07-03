import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'src/_zswod/redux/store';
import { entityAdapter } from './reducer';

const { selectAll } = entityAdapter.getSelectors((state: RootState) => state.imagesReducer);

const selectStatus = (state: RootState) => {
  const { error, status } = state.imagesReducer;

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

export { selectModels, selectStatus };
