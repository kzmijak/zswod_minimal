import { createArrayMapper } from 'src/_zswod/utils/mapperCreators';
import { ArticleHeaderDto } from './ArticleHeaderDto';
import { ArticleHeaderModel } from './ArticleHeaderModel';

const mapDtoToModel = ({ articleGuid, date, ...rest }: ArticleHeaderDto): ArticleHeaderModel => ({
  id: articleGuid,
  date: new Date(date).toISOString(),
  ...rest,
});

const arrayMapDtoToModel = createArrayMapper(mapDtoToModel);

export { mapDtoToModel, arrayMapDtoToModel };
