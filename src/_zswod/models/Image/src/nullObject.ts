import { nullObjectConsts } from 'src/_zswod/utils/nullObjectConsts';
import { ImageModel } from './ImageModel';

const { GUID, STRING } = nullObjectConsts;

const nullObject: ImageModel = {
  alt: STRING,
  articleId: GUID,
  id: GUID,
  title: STRING,
  url: STRING,
};

export { nullObject };
