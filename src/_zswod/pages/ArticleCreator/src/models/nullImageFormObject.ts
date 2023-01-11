import { nullObjectConsts } from 'src/_zswod/utils/nullObjectConsts';
import { ImageFormModel } from './ImageFormModel';

const { STRING } = nullObjectConsts;

const nullImageFormObject: ImageFormModel = {
  alt: STRING,
  title: STRING,
  url: STRING,
};

export { nullImageFormObject };
