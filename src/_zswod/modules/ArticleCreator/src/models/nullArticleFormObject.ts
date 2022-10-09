import { nullObjectConsts } from 'src/_zswod/utils/nullObjectConsts';
import { ArticleFormModel } from './ArticleFormModel';

const { STRING, ARRAY } = nullObjectConsts;

const nullArticleFormObject: ArticleFormModel = {
  content: STRING,
  short: STRING,
  title: STRING,
  images: ARRAY,
};

export { nullArticleFormObject };
