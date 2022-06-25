import { FetchImages } from './src/components/FetchImages';
import { reducer as imagesReducer } from './src/slice/reducer';
import {
  selectModels as selectImages,
  selectStatus as selectImagesStatus,
} from './src/slice/selectors';

export { imagesReducer, selectImages, selectImagesStatus, FetchImages };
