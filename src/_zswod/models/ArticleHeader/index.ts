import { ArticleHeaderDto } from './src/ArticleHeaderDto';
import { ArticleHeaderModel } from './src/ArticleHeaderModel';
import {
  mapDtoToModel as mapArticleHeaderDtoToModel,
  arrayMapDtoToModel as arrayMapArticleHeaderDtoToModel,
} from './src/mapper';
import { nullObject as nullArticleHeaderObject } from './src/nullObject';

export type { ArticleHeaderDto, ArticleHeaderModel };
export { mapArticleHeaderDtoToModel, arrayMapArticleHeaderDtoToModel, nullArticleHeaderObject };
