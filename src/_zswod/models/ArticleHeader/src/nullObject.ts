import { nullObjectConsts } from 'src/_zswod/utils/nullObjectConsts';
import { ArticleHeaderModel } from './ArticleHeaderModel';

const { GUID, DATE_STRING, STRING, ARRAY } = nullObjectConsts;

const nullObject: ArticleHeaderModel = {
  id: GUID,
  uploadDate: DATE_STRING,
  short: STRING,
  title: STRING,
  titleNormalized: STRING,
  images: ARRAY,
};

export { nullObject };
