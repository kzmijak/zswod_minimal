import { nanoid } from 'nanoid';
import { BlobModel } from 'src/_zswod/models/Blob';
import { ImageModel } from '../../Image';

type GetBlobUrlFunction = (blobId: string) => string;

const mapBlobToImage = (
  { createTime, id }: BlobModel,
  getBlobUrl: GetBlobUrlFunction
): ImageModel => ({
  alt: '',
  createTime,
  id: nanoid(),
  order: -1,
  src: getBlobUrl(id),
});

const arrayMapBlobToImage = (blobs: BlobModel[], getBlobUrl: GetBlobUrlFunction) =>
  blobs.map((blob) => mapBlobToImage(blob, getBlobUrl));

export { mapBlobToImage, arrayMapBlobToImage };
