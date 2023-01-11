import { nullObjectConsts } from 'src/_zswod/utils/nullObjectConsts';
import { ArticleModel } from './ArticleModel';

const { GUID, STRING, DATE_STRING } = nullObjectConsts;

const nullObject: ArticleModel = {
  id: GUID,
  uploadDate: DATE_STRING,
  short: STRING,
  content: STRING,
  title: STRING,
};

export { nullObject };
