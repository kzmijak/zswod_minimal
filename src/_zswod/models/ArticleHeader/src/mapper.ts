import { createArrayMapper } from 'src/_zswod/utils/mapperCreators';
import { mapImageDtoToModel } from '../../Image';
import { ArticleHeaderDto } from './ArticleHeaderDto';
import { ArticleHeaderModel } from './ArticleHeaderModel';

const mapDtoToModel = ({
  createTime,
  id,
  previewImage,
  short,
  title,
  titleNormalized,
}: ArticleHeaderDto): ArticleHeaderModel => ({
  createTime: new Date(createTime).toISOString(),
  id,
  previewImage: mapImageDtoToModel(previewImage),
  short,
  title,
  titleNormalized,
});

const arrayMapDtoToModel = createArrayMapper(mapDtoToModel);
export { mapDtoToModel, arrayMapDtoToModel };
