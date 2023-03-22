import { nullObjectConsts } from 'src/_zswod/utils/nullObjectConsts';
import { GalleryModel } from './GalleryModel';

const { DATE_STRING, STRING, ARRAY, GUID } = nullObjectConsts;

const nullGalleryObject: GalleryModel = {
  id: GUID,
  title: STRING,
  images: ARRAY,
  createTime: DATE_STRING,
  updateTime: DATE_STRING,
};

export { nullGalleryObject };
