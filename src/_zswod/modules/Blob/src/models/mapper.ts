import { BlobDto } from './BlobDto';
import { BlobModel } from './BlobModel';

const mapBlobDtoToModel = ({ title, alt, id, createdAt }: BlobDto, dropId?: string): BlobModel => ({
  id,
  dropId,
  alt,
  title,
  createdAt: new Date(createdAt).toISOString(),
});

const arrayMapBlobDtoToModel = (dtos: BlobDto[], dropId?: string): BlobModel[] =>
  dtos.map((blob) => mapBlobDtoToModel(blob, dropId));

export { arrayMapBlobDtoToModel, mapBlobDtoToModel };
