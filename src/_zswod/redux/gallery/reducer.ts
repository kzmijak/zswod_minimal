import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosLoadable, getAxiosLoadableInstance } from 'src/_zswod/hooks/useAxiosLoadable';
import { ArticlesMapper } from 'src/_zswod/mappers/articlesMapper';
import { Article } from 'src/_zswod/models/Article/article';
import { ArticleResponse } from 'src/_zswod/models/Article/articleResponse';

type GalleryState = AxiosLoadable<Article[]> & {
  openedGallery: Article | null;
};

const initialState: GalleryState = {
  ...getAxiosLoadableInstance<Article[]>(),
  openedGallery: null,
};

const slice = createSlice({
  name: 'gallery',
  initialState: initialState,
  reducers: {
    setGallery(state, action: PayloadAction<Article | null>) {
      state.openedGallery = action.payload;
    },
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
      state.openedGallery = ArticlesMapper.ResponseToModel(action.payload);
    },
    getArticlesSuccess(state, action: PayloadAction<ArticleResponse[]>) {
      state.isLoading = false;
      state.isLoaded = true;
      state.data = ArticlesMapper.ListResponseToModel(action.payload);
    },
  },
});

const galleryReducer = slice.reducer;
export { galleryReducer, slice };
