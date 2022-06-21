import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosLoadable, getAxiosLoadableInstance } from 'src/_old_zswod/hooks/useAxiosLoadable';
import { ArticlesMapper } from 'src/_old_zswod/mappers/articlesMapper';
import { Article } from 'src/_old_zswod/models/Article/article';
import { ArticleResponse } from 'src/_old_zswod/models/Article/articleResponse';

type NewsState = AxiosLoadable<Article[]> & {
  currentArticle: Article | null;
};

const initialState: NewsState = {
  ...getAxiosLoadableInstance<Article[]>(),
  currentArticle: null,
};

const slice = createSlice({
  name: 'news',
  initialState: initialState,
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
      state.isLoading = false;
      state.isLoaded = true;
      state.currentArticle = ArticlesMapper.ResponseToModel(action.payload);
    },
    getArticlesSuccess(state, action: PayloadAction<ArticleResponse[]>) {
      state.isLoading = false;
      state.isLoaded = true;
      state.data = ArticlesMapper.ListResponseToModel(action.payload);
    },
  },
});

const newsReducer = slice.reducer;
export { newsReducer, slice };
