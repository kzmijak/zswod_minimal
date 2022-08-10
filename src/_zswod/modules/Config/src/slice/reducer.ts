import { createSlice } from '@reduxjs/toolkit';
import { Config } from '../models/Config';
import { fetchConfig } from './actions';

type InitialState = {
  config: Config;
  isReady: boolean;
};

const initialState: InitialState = {
  config: {
    backendUrl: '',
  },
  isReady: false,
};

const slice = createSlice({
  name: 'config',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchConfig.fulfilled, (state, action) => {
        state.isReady = true;
        state.config = action.payload;
      })
      .addCase(fetchConfig.rejected, (state) => {
        state.isReady = true;
      }),
});

const { actions, reducer } = slice;

export { reducer, actions };
