import { nullObjectConsts } from 'src/_zswod/utils/nullObjectConsts';
import { ImageFormContent } from './ImageFormContent';

const { STRING, NUMBER } = nullObjectConsts;

const nullImageFormObject: ImageFormContent = {
  alt: STRING,
  order: NUMBER,
  src: STRING,
};

export { nullImageFormObject };
