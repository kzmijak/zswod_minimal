import { nullObjectConsts } from 'src/_zswod/utils/nullObjectConsts';
import { ImageModel } from './ImageModel';

const { GUID, STRING, BOOLEAN } = nullObjectConsts;

const nullObject: ImageModel = {
  alt: STRING,
  id: GUID,
  title: STRING,
  blobId: STRING,
  isPreview: BOOLEAN,
};

export { nullObject };
