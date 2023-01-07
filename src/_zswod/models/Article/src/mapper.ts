import { createArrayMapper } from 'src/_zswod/utils/mapperCreators';
import { ArticleDto } from './ArticleDto';
import { ArticleModel } from './ArticleModel';

const mapDtoToModel = ({ content, id, short, title, uploadDate }: ArticleDto): ArticleModel => ({
  content,
  id,
  short,
  title,
  uploadDate,
});

const arrayMapDtoToModel = createArrayMapper(mapDtoToModel);

export { mapDtoToModel, arrayMapDtoToModel };
