import { BlobDto } from './BlobDto';
import { BlobModel } from './BlobModel';

const mapBlobDtoToModel = ({ id, createTime }: BlobDto): BlobModel => ({
  id,
  createTime: new Date(createTime).toISOString(),
});

const arrayMapBlobDtoToModel = (dtos: BlobDto[]): BlobModel[] =>
  dtos.map((blob) => mapBlobDtoToModel(blob));

export { arrayMapBlobDtoToModel, mapBlobDtoToModel };
