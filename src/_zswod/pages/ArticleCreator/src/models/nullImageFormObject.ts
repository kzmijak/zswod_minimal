import { nullObjectConsts } from 'src/_zswod/utils/nullObjectConsts';
import { ImageFormContent } from './ImageFormContent';

const { STRING, BOOLEAN } = nullObjectConsts;

const nullImageFormObject: ImageFormContent = {
  alt: STRING,
  title: STRING,
  blobId: STRING,
  isPreview: BOOLEAN,
};

export { nullImageFormObject };
