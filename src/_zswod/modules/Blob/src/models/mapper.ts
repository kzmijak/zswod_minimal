import { BlobDto } from './BlobDto';
import { BlobModel } from './BlobModel';

const mapBlobDtoToModel = ({ title, alt, id, createdAt }: BlobDto): BlobModel => ({
  id,
  alt,
  title,
  createdAt: new Date(createdAt).toISOString(),
});

const arrayMapBlobDtoToModel = (dtos: BlobDto[]): BlobModel[] =>
  dtos.map((blob) => mapBlobDtoToModel(blob));

export { arrayMapBlobDtoToModel, mapBlobDtoToModel };
