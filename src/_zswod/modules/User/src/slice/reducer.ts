import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserModel } from 'src/_zswod/models/User';
import { AuthenticationStatus } from '../models/AuthenticationStatus';
import { fetchCurrentUserAsyncThunk } from './thunks';

type InitialState = {
  status: AuthenticationStatus;
  user: UserModel | undefined;
};

const initialState: InitialState = {
  status: 'anonymous',
  user: undefined,
};

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateAuthenticationStatus: (state, action: PayloadAction<AuthenticationStatus>) => {
      state.status = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchCurrentUserAsyncThunk.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(fetchCurrentUserAsyncThunk.fulfilled, (state, action) => {
        state.user = action.payload;
        state.status = 'authenticated';
      })
      .addCase(fetchCurrentUserAsyncThunk.rejected, (state) => {
        state.status = 'anonymous';
        state.user = undefined;
      }),
});

const { actions, reducer } = slice;
export { actions, reducer };
