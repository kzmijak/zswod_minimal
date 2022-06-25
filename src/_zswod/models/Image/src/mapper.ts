import { createArrayMapper } from 'src/_zswod/utils/createArrayMapper';
import { ImageDto } from './ImageDto';
import { ImageModel } from './ImageModel';

const mapDtoToModel = (dto: ImageDto): ImageModel => ({
  ...dto,
});

const arrayMapDtoToModel = createArrayMapper(mapDtoToModel);

export { mapDtoToModel, arrayMapDtoToModel };
