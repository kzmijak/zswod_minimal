import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { ArticleModel, nullArticleObject } from 'src/_zswod/models/Article';
import { ImageModel } from 'src/_zswod/models/Image';
import { RequestStatus } from 'src/_zswod/utils/requestStatus';
import { getFetchArticleError } from '../api/fetchArticle';
import { fetchArticleAsyncThunk } from './thunks';

type InitialState = {
  status: RequestStatus;
  error: string;
  article: ArticleModel;
};

const imagesEntityAdapter = createEntityAdapter<ImageModel>();
const initialState = imagesEntityAdapter.getInitialState<InitialState>({
  article: nullArticleObject,
  error: '',
  status: 'idle',
});

const slice = createSlice({
  name: 'article',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchArticleAsyncThunk.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchArticleAsyncThunk.fulfilled, (state, action) => {
        const { article, images } = action.payload;

        state.status = 'success';
        state.article = article;
        imagesEntityAdapter.setAll(state, images);
      })
      .addCase(fetchArticleAsyncThunk.rejected, (state, action) => {
        state.status = 'error';
        state.error = getFetchArticleError(action.error);
      }),
});

const { actions, reducer } = slice;

const entitySelectors = imagesEntityAdapter.getSelectors();

export { actions, reducer as currentArticleReducer, entitySelectors };
