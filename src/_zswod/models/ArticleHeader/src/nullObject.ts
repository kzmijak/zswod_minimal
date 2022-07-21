import { nullObjectConsts } from 'src/_zswod/utils/nullObjectConsts';
import { ArticleHeaderModel } from './ArticleHeaderModel';

const { GUID, DATE_STRING, STRING } = nullObjectConsts;

const nullObject: ArticleHeaderModel = {
  id: GUID,
  date: DATE_STRING,
  previewImageAlt: STRING,
  previewImageUrl: STRING,
  short: STRING,
  title: STRING,
  titleNormalized: STRING,
};

export { nullObject };
