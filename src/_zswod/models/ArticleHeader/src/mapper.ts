import { createArrayMapper } from 'src/_zswod/utils/mapperCreators';
import { arrayMapImageDtoToModel } from '../../Image';
import { ArticleHeaderDto } from './ArticleHeaderDto';
import { ArticleHeaderModel } from './ArticleHeaderModel';

const mapDtoToModel = ({
  id,
  images,
  short,
  title,
  titleNormalized,
  uploadDate,
}: ArticleHeaderDto): ArticleHeaderModel => ({
  uploadDate: new Date(uploadDate).toISOString(),
  id,
  short,
  title,
  titleNormalized,
  images: arrayMapImageDtoToModel(images),
});

const arrayMapDtoToModel = createArrayMapper(mapDtoToModel);

export { mapDtoToModel, arrayMapDtoToModel };
