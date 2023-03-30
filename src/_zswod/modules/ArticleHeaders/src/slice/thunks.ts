import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchArticleHeaders } from '../api/fetchArticleHeaders';
import { removeArticle } from '../api/removeArticle';

const fetchArticleHeadersAsyncThunk = createAsyncThunk('articleHeaders/fetch', fetchArticleHeaders);

const removeArticleAsyncThunk = createAsyncThunk('articleHeaders/delete', removeArticle);

export { fetchArticleHeadersAsyncThunk, removeArticleAsyncThunk };
