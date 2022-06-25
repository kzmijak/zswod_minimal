import { ArticleHeaderDto } from './src/ArticleHeaderDto';
import { ArticleHeaderModel } from './src/ArticleHeaderModel';
import {
  mapDtoToModel as mapArticleHeaderDtoToModel,
  arrayMapDtoToModel as arrayMapArticleHeaderDtoToModel,
} from './src/mapper';

export type { ArticleHeaderDto, ArticleHeaderModel };
export { mapArticleHeaderDtoToModel, arrayMapArticleHeaderDtoToModel };
