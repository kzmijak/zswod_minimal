import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'src/_zswod/redux/store';
import { entityAdapter } from './reducer';

const { selectTotal, selectAll, selectById } = entityAdapter.getSelectors();

const selectBlobsState = (state: RootState) => state.blobs;

const selectAllBlobs = createSelector(selectBlobsState, (state) => selectAll(state));

const selectBlobById = (id: string) =>
  createSelector(selectBlobsState, (state) => selectById(state, id));

export { selectAllBlobs, selectTotal as selectTotalBlobs, selectBlobsState, selectBlobById };
