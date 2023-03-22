import { createArrayMapper } from 'src/_zswod/utils/mapperCreators';
import { ImageDto } from './ImageDto';
import { ImageModel } from './ImageModel';

const mapDtoToModel = ({ blobId, createTime, id, order, alt }: ImageDto): ImageModel => ({
  blobId,
  createTime: new Date(createTime).toISOString(),
  id,
  order,
  alt: alt ?? '',
});

const arrayMapDtoToModel = createArrayMapper(mapDtoToModel);

export { mapDtoToModel, arrayMapDtoToModel };
