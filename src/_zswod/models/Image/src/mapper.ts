import { createArrayMapper } from 'src/_zswod/utils/mapperCreators';
import { ImageDto } from './ImageDto';
import { ImageModel } from './ImageModel';

const mapDtoToModel = ({ imageGuid, articleGuid, ...rest }: ImageDto): ImageModel => ({
  id: imageGuid,
  articleId: articleGuid,
  ...rest,
});

const arrayMapDtoToModel = createArrayMapper(mapDtoToModel);

export { mapDtoToModel, arrayMapDtoToModel };
