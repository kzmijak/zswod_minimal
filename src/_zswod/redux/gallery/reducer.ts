import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosLoadable, getAxiosLoadableInstance } from 'src/_zswod/hooks/useAxiosLoadable';
import { ArticlesMapper } from 'src/_zswod/mappers/articlesMapper';
import { Article } from 'src/_zswod/models/Article/article';
import { ArticleResponse } from 'src/_zswod/models/Article/articleResponse';

type GalleryState = AxiosLoadable<Article[]> & {
  previousGallery: Article | null;
  openedGallery: Article | null;
  inTransition: boolean;
};

const initialState: GalleryState = {
  ...getAxiosLoadableInstance<Article[]>(),
  previousGallery: null,
  openedGallery: null,
  inTransition: false,
};

const slice = createSlice({
  name: 'gallery',
  initialState: initialState,
  reducers: {
    startTransition(state) {
      state.previousGallery = state.openedGallery;
      state.openedGallery = null;
      state.inTransition = true;
    },
    endTransition(state, value: PayloadAction<Article | null>) {
      state.inTransition = false;
      state.openedGallery = value.payload;
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
