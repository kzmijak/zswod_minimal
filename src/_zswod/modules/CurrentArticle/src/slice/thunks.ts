import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchArticle } from '../api/fetchArticle';

const fetchArticleAsyncThunk = createAsyncThunk(
  'article/fetch-article',
  async (titleNormalized: string) => fetchArticle(titleNormalized)
);

export { fetchArticleAsyncThunk };
