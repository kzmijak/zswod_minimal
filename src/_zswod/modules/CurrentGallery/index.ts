import { currentGalleryReducer } from './src/slice/reducer';
import {
  selectCurrentGallery,
  selectCurrentGalleryStatus,
  selectCurrentGalleryId,
  selectCurrentGalleryImages,
} from './src/slice/selectors';
import { useGallery } from './src/utils/useGallery';

export {
  currentGalleryReducer,
  useGallery,
  selectCurrentGallery,
  selectCurrentGalleryStatus,
  selectCurrentGalleryId,
  selectCurrentGalleryImages,
};
