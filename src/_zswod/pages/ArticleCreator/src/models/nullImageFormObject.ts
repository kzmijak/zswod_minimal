import { nullObjectConsts } from 'src/_zswod/utils/nullObjectConsts';
import { ImageFormContent } from './ImageFormContent';

const { STRING } = nullObjectConsts;

const nullImageFormObject: ImageFormContent = {
  alt: STRING,
  title: STRING,
  url: STRING,
};

export { nullImageFormObject };
