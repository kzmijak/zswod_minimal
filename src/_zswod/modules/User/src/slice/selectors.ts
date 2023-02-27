import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'src/_zswod/redux/store';

const selectUserState = (rootState: RootState) => rootState.user;

const selectCurrentUser = createSelector(selectUserState, (state) => state.user);

const selectAuthenticationStatus = createSelector(selectUserState, (state) => state.status);

const selectCurrentUserRole = createSelector(selectCurrentUser, (user) => user?.role);

export { selectAuthenticationStatus, selectCurrentUserRole };
