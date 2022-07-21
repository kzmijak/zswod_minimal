import { createArrayMapper } from 'src/_zswod/utils/createArrayMapper';
import { ImageDto } from './ImageDto';
import { ImageModel } from './ImageModel';

const mapDtoToModel = ({ imageGuid, ...rest }: ImageDto): ImageModel => ({
  id: imageGuid,
  ...rest,
});

const arrayMapDtoToModel = createArrayMapper(mapDtoToModel);

export { mapDtoToModel, arrayMapDtoToModel };
