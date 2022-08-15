import { nullObjectConsts } from 'src/_zswod/utils/nullObjectConsts';
import { ArticleModel } from './ArticleModel';

const { GUID, STRING, DATE_STRING } = nullObjectConsts;

const nullObject: ArticleModel = {
  id: GUID,
  titleNormalized: STRING,
  short: STRING,
  content: STRING,
  date: DATE_STRING,
  previewImageUrl: STRING,
  title: STRING,
};

export { nullObject };
