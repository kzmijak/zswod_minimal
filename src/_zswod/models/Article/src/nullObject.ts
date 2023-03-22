import { nullObjectConsts } from 'src/_zswod/utils/nullObjectConsts';
import { nullGalleryObject } from '../../Gallery';
import { ArticleModel } from './ArticleModel';

const { GUID, STRING, DATE_STRING } = nullObjectConsts;

const nullObject: ArticleModel = {
  id: GUID,
  updateTime: DATE_STRING,
  createTime: DATE_STRING,
  short: STRING,
  content: STRING,
  title: STRING,
  gallery: nullGalleryObject,
};

export { nullObject };
