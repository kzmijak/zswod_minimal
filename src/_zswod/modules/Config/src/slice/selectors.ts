import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'src/_zswod/redux/store';

const selectState = createSelector(
  (rootState: RootState) => rootState.config,
  (state) => state
);

const selectStatus = createSelector(selectState, (state) => state.isReady);

const selectBackendUrl = createSelector(selectState, (state) => state.config.backendUrl);

export { selectBackendUrl, selectStatus };
