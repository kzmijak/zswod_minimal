import { ArticleDto } from './src/ArticleDto';
import { ArticleModel } from './src/ArticleModel';
import {
  arrayMapDtoToModel as arrayMapArticleDtoToModel,
  mapDtoToModel as mapArticleDtoToModel,
} from './src/mapper';
import { nullObject as nullArticleObject } from './src/nullObject';

export { mapArticleDtoToModel, arrayMapArticleDtoToModel, nullArticleObject };
export type { ArticleModel, ArticleDto };
