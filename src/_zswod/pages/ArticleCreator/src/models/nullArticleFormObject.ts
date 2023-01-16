import { nullObjectConsts } from 'src/_zswod/utils/nullObjectConsts';
import { ArticleFormContent } from './ArticleFormContent';

const { STRING } = nullObjectConsts;

const nullArticleFormObject: ArticleFormContent = {
  content: STRING,
  short: STRING,
  title: STRING,
};

export { nullArticleFormObject };
