import { createArrayMapper } from 'src/_zswod/utils/mapperCreators';
import { mapGalleryDtoToModel } from '../../Gallery';
import { ArticleDto } from './ArticleDto';
import { ArticleModel } from './ArticleModel';

const mapDtoToModel = ({
  content,
  id,
  short,
  title,
  createTime,
  updateTime,
  gallery,
  titleNormalized,
}: ArticleDto): ArticleModel => ({
  content,
  id,
  short,
  title,
  createTime: new Date(createTime).toISOString(),
  updateTime: new Date(updateTime).toISOString(),
  gallery: mapGalleryDtoToModel(gallery),
  titleNormalized,
});

const arrayMapDtoToModel = createArrayMapper(mapDtoToModel);

export { mapDtoToModel, arrayMapDtoToModel };
