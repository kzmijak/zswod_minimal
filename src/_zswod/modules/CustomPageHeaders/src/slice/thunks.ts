import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCustomPageHeaders } from '../api/fetchCustomPageHeaders';

const fetchCustomPageHeadersAsyncThunk = createAsyncThunk(
  'customPageHeaders/fetchCustomPageHeaders',
  fetchCustomPageHeaders
);

export { fetchCustomPageHeadersAsyncThunk };
