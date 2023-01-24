import { BlobModel } from 'src/_zswod/modules/Blob/src/models/BlobModel';
import { createArrayMapper } from 'src/_zswod/utils/mapperCreators';
import { ImageFormContent } from '../models/ImageFormContent';

const mapBlobToImage = ({ alt, id, title }: BlobModel): ImageFormContent => ({
  alt,
  blobId: id,
  isPreview: false,
  title,
});

const arrayMapBlobToImage = createArrayMapper(mapBlobToImage);

export { arrayMapBlobToImage };
