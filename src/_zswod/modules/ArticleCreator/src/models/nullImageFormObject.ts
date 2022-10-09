import { nullObjectConsts } from 'src/_zswod/utils/nullObjectConsts';
import { ImageFormModel } from './ImageFormModel';

const { BOOLEAN, STRING } = nullObjectConsts;

const nullImageFormObject: ImageFormModel = {
  alt: STRING,
  isPreview: BOOLEAN,
  name: STRING,
};

export { nullImageFormObject };
