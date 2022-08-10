import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Config } from '../models/Config';

const fetchConfig = createAsyncThunk('config/fetch', async () => {
  const response = await axios.get<Config>('js/config-local.json');
  return response.data;
});

export { fetchConfig };
