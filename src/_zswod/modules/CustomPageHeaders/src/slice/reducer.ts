import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { CustomPageHeaderModel } from 'src/_zswod/models/CustomPageHeader';
import { RequestStatus } from 'src/_zswod/utils/requestStatus';
import { fetchCustomPageHeadersAsyncThunk } from './thunks';

type InitialState = {
  status: RequestStatus;
  error: string;
};

const entityAdapter = createEntityAdapter<CustomPageHeaderModel>({
  selectId: ({ url }) => url,
});

const initialState = entityAdapter.getInitialState<InitialState>({
  error: '',
  status: 'idle',
});

const slice = createSlice({
  name: 'customPageHeaders',
  initialState,
  reducers: {
    invalidateCustomPagesFetch: (state) => {
      state.status = 'idle';
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchCustomPageHeadersAsyncThunk.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCustomPageHeadersAsyncThunk.fulfilled, (state, action) => {
        entityAdapter.setAll(state, action.payload);
      })
      .addCase(fetchCustomPageHeadersAsyncThunk.rejected, (state) => {
        state.status = 'error';
      }),
});

const { actions, reducer } = slice;

export { reducer as customPageHeadersReducer, actions, entityAdapter };
