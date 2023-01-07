import { createArrayMapper } from 'src/_zswod/utils/mapperCreators';
import { ArticleDto } from './ArticleDto';
import { ArticleModel } from './ArticleModel';

const mapDtoToModel = ({ articleGuid, ...rest }: ArticleDto): ArticleModel => ({
  id: articleGuid,
  ...rest,
});

const arrayMapDtoToModel = createArrayMapper(mapDtoToModel);

export { mapDtoToModel, arrayMapDtoToModel };
