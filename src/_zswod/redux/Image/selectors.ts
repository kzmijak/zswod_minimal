import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { Image } from '../../models/image';

const getImagesState = (state: RootState) => state.image;

const getImages = (state: RootState) => getImagesState(state).data;

const getImagesSliced = (limit: number) =>
  createSelector(getImages, (images: Image[]) => images.slice(0, limit));

export { getImages, getImagesState, getImagesSliced };
