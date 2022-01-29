import { RootState } from '../store';

const getCurrentGallery = (state: RootState) => state.gallery.openedGallery;

export { getCurrentGallery };
