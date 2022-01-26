import { createSelector } from '@reduxjs/toolkit';
import { Image } from 'src/_zswod/utils/Mock/images';
import { RootState } from '../store';

const getImagesState = (state: RootState) => state.image;

const getImages = (state: RootState) => getImagesState(state).data;

const getArticleImages = (articleId: number) =>
  createSelector(getImages, (images: Image[]) => images.filter((i) => i.articleId === articleId));

export { getImages, getImagesState, getArticleImages };
