import { nullObjectConsts } from 'src/_zswod/utils/nullObjectConsts';
import { ImageModel } from './ImageModel';

const { GUID, STRING, DATE_STRING, NUMBER } = nullObjectConsts;

const nullObject: ImageModel = {
  alt: STRING,
  id: GUID,
  createTime: DATE_STRING,
  order: NUMBER,
  src: STRING,
};

export { nullObject };
