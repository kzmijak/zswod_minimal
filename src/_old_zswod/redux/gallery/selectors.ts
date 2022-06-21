import { RootState } from '../store';

const getGalleryState = (state: RootState) => state.gallery;

const getCurrentGallery = (state: RootState) => state.gallery.openedGallery;

const getArticles = (state: RootState) => state.gallery.data;

export { getCurrentGallery, getArticles, getGalleryState };
