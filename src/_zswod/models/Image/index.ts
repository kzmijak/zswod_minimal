import { ImageDto } from './src/ImageDto';
import { ImageModel } from './src/ImageModel';
import {
  arrayMapDtoToModel as arrayMapImageDtoToModel,
  mapDtoToModel as mapImageDtoToModel,
} from './src/mapper';
import { nullObject as nullImageObject } from './src/nullObject';

export { arrayMapImageDtoToModel, mapImageDtoToModel, nullImageObject };
export type { ImageDto, ImageModel };
