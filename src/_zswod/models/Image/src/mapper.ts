import { createArrayMapper } from 'src/_zswod/utils/mapperCreators';
import { ImageDto } from './ImageDto';
import { ImageModel } from './ImageModel';

const mapDtoToModel = ({ alt, id, isPreview, title, blobId }: ImageDto): ImageModel => ({
  alt,
  id,
  isPreview,
  title,
  blobId,
});

const arrayMapDtoToModel = createArrayMapper(mapDtoToModel);

export { mapDtoToModel, arrayMapDtoToModel };
