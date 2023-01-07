import { createArrayMapper } from 'src/_zswod/utils/mapperCreators';
import { ArticleHeaderDto } from './ArticleHeaderDto';
import { ArticleHeaderModel } from './ArticleHeaderModel';

const mapDtoToModel = ({
  id,
  previewImageAlt,
  previewImageUrl,
  short,
  title,
  titleNormalized,
  uploadDate,
}: ArticleHeaderDto): ArticleHeaderModel => ({
  uploadDate: new Date(uploadDate).toISOString(),
  id,
  previewImageAlt,
  previewImageUrl,
  short,
  title,
  titleNormalized,
});

const arrayMapDtoToModel = createArrayMapper(mapDtoToModel);

export { mapDtoToModel, arrayMapDtoToModel };
