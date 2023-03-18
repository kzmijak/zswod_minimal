import { createArrayMapper } from 'src/_zswod/utils/mapperCreators';
import { mapImageDtoToModel } from '../../Image';
import { ArticleHeaderDto } from './ArticleHeaderDto';
import { ArticleHeaderModel } from './ArticleHeaderModel';

const mapDtoToModel = ({
  id,
  short,
  title,
  titleNormalized,
  uploadDate,
  previewImage,
}: ArticleHeaderDto): ArticleHeaderModel => ({
  uploadDate: new Date(uploadDate).toISOString(),
  id,
  short,
  title,
  titleNormalized,
  previewImage: mapImageDtoToModel(previewImage),
});

const arrayMapDtoToModel = createArrayMapper(mapDtoToModel);

export { mapDtoToModel, arrayMapDtoToModel };
