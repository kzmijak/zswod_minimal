import { combineReducers } from 'redux';
import { articleHeadersReducer } from '../modules/ArticleHeaders';
import { blobsReducer } from '../modules/Blob';
import { configReducer } from '../modules/Config';
import { currentArticleReducer } from '../modules/CurrentArticle';
import { currentGalleryReducer } from '../modules/CurrentGallery';
import { galleryHeadersReducer } from '../modules/GalleryHeaders';
import { userReducer } from '../modules/User';

const rootReducer = combineReducers({
  articleHeaders: articleHeadersReducer,
  config: configReducer,
  blobs: blobsReducer,
  currentArticle: currentArticleReducer,
  user: userReducer,
  galleryHeaders: galleryHeadersReducer,
  currentGallery: currentGalleryReducer,
});

export { rootReducer };
