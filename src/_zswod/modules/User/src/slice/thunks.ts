import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCurrentUser } from '../api/fetchCurrentUser';

const fetchCurrentUserAsyncThunk = createAsyncThunk('user/fetch', fetchCurrentUser);

export { fetchCurrentUserAsyncThunk };
