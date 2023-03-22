import { nullObjectConsts } from 'src/_zswod/utils/nullObjectConsts';
import { nullImageObject } from '../../Image';
import { ArticleHeaderModel } from './ArticleHeaderModel';

const { GUID, DATE_STRING, STRING } = nullObjectConsts;

const nullObject: ArticleHeaderModel = {
  id: GUID,
  createTime: DATE_STRING,
  short: STRING,
  title: STRING,
  titleNormalized: STRING,
  previewImage: nullImageObject,
};

export { nullObject };
