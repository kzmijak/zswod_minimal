import { createArrayMapper } from 'src/_zswod/utils/createArrayMapper';
import { ArticleHeaderDto } from './ArticleHeaderDto';
import { ArticleHeaderModel } from './ArticleHeaderModel';

const mapDtoToModel = (dto: ArticleHeaderDto): ArticleHeaderModel => ({
  ...dto,
});

const arrayMapDtoToModel = createArrayMapper(mapDtoToModel);

export { mapDtoToModel, arrayMapDtoToModel };
