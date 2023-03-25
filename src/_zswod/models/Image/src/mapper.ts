import { createArrayMapper } from 'src/_zswod/utils/mapperCreators';
import { ImageDto } from './ImageDto';
import { ImageModel } from './ImageModel';

const mapDtoToModel = ({ src, createTime, id, order, alt }: ImageDto): ImageModel => ({
  src,
  createTime: new Date(createTime).toISOString(),
  id,
  order,
  alt: alt ?? '',
});

const arrayMapDtoToModel = createArrayMapper(mapDtoToModel);

export { mapDtoToModel, arrayMapDtoToModel };
