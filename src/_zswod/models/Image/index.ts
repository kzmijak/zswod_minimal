import { ImageDto } from './src/ImageDto';
import { ImageModel } from './src/ImageModel';
import {
  arrayMapDtoToModel as arrayMapImageDtoToModel,
  mapDtoToModel as mapImageDtoToModel,
} from './src/mapper';

export { arrayMapImageDtoToModel, mapImageDtoToModel };
export type { ImageDto, ImageModel };
