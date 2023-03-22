import { nullObjectConsts } from 'src/_zswod/utils/nullObjectConsts';
import { ImageModel } from './ImageModel';

const { GUID, STRING, DATE_STRING, NUMBER } = nullObjectConsts;

const nullObject: ImageModel = {
  alt: STRING,
  id: GUID,
  blobId: STRING,
  createTime: DATE_STRING,
  order: NUMBER,
};

export { nullObject };
