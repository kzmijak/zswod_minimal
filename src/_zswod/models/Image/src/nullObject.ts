import { nullObjectConsts } from 'src/_zswod/utils/nullObjectConsts';
import { ImageModel } from './ImageModel';

const { GUID, STRING } = nullObjectConsts;

const nullObject: ImageModel = {
  alt: STRING,
  id: GUID,
  title: STRING,
  url: STRING,
};

export { nullObject };
