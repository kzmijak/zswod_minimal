import { nanoid } from 'nanoid';
import { BlobModel } from 'src/_zswod/models/Blob';
import { ImageModel } from '../../Image';

type GetBlobUrlFunction = (blobId: string) => string;

const mapBlobToImage = (
  { createTime, id }: BlobModel,
  getBlobUrl: GetBlobUrlFunction,
  order = -1
): ImageModel => ({
  alt: '',
  createTime,
  id: nanoid(),
  order,
  src: getBlobUrl(id),
});

const arrayMapBlobToImage = (
  blobs: BlobModel[],
  getBlobUrl: GetBlobUrlFunction,
  startingOrder = 0
) => blobs.map((blob, index) => mapBlobToImage(blob, getBlobUrl, startingOrder + index));

export { mapBlobToImage, arrayMapBlobToImage };
