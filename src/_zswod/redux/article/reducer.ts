import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getAxiosLoadableInstance } from 'src/_zswod/utils/AxiosLoadable';
import { Article } from 'src/_zswod/models/Article/article';
import { ArticleResponse } from 'src/_zswod/models/Article/articleResponse';
import { ArticlesMapper } from 'src/_zswod/mappers/articlesMapper';

const initialState = getAxiosLoadableInstance<Article>();

const slice = createSlice({
  name: 'article',
  initialState,
  reducers: {
    startLoading(state) {
      state.isLoading = true;
      state.isLoaded = false;
    },
    hasError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.isLoaded = true;
      state.error = action.payload;
    },
    getArticleSuccess(state, action: PayloadAction<ArticleResponse>) {
      state.isLoaded = true;
      state.isLoading = false;
      state.data = [ArticlesMapper.ResponseToModel(action.payload)];
    },
    getArticlesSuccess(state, action: PayloadAction<ArticleResponse[]>) {
      state.isLoading = false;
      state.isLoaded = true;
      state.data = ArticlesMapper.ListResponseToModel(action.payload);
    },
    postArticleSuccess(state, action: PayloadAction<ArticleResponse>) {
      state.isLoading = false;
      state.isLoaded = true;
      state.data = [ArticlesMapper.ResponseToModel(action.payload)];
    },
  },
});

const articleReducer = slice.reducer;
export { articleReducer, slice };
