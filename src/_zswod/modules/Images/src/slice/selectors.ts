import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'src/_zswod/redux/store';
import { ImageModel } from 'src/_zswod/models/Image';
import { entityAdapter } from './reducer';

const { selectEntities } = entityAdapter.getSelectors();

const selectStatus = (state: RootState) => {
  const { error, status } = state.imagesReducer;

  return {
    error,
    status,
  };
};

const selectModels = (limit?: number) =>
  createSelector(selectEntities, (entities) => {
    const values = Object.values(entities).filter((nullableValue) =>
      Boolean(nullableValue)
    ) as ImageModel[];

    return values.slice(0, limit);
  });

export { selectModels, selectStatus };
