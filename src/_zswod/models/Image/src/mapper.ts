import { createArrayMapper } from 'src/_zswod/utils/mapperCreators';
import { ImageDto } from './ImageDto';
import { ImageModel } from './ImageModel';

const mapDtoToModel = ({ alt, id, order, title, uploadDate, url }: ImageDto): ImageModel => ({
  alt,
  id,
  order,
  title,
  uploadDate: new Date(uploadDate).toISOString(),
  url,
});

const arrayMapDtoToModel = createArrayMapper(mapDtoToModel);

export { mapDtoToModel, arrayMapDtoToModel };
