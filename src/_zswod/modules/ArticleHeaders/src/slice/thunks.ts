import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchArticleHeaders } from '../api/fetchArticleHeaders';

const fetchArticleHeadersAsyncThunk = createAsyncThunk('articleHeaders/fetch', fetchArticleHeaders);

export { fetchArticleHeadersAsyncThunk };
