import { mapImageDtoToModel } from '../../Image';
import { GalleryHeaderDto } from './GalleryHeaderDto';
import { GalleryHeaderModel } from './GalleryHeaderModel';

const mapGalleryHeaderDtoToModel = (
  { previewImage, title }: GalleryHeaderDto,
  id: number
): GalleryHeaderModel => ({
  previewImage: mapImageDtoToModel(previewImage),
  title,
  id,
});

const arrayMapGalleryHeaderDtoToModel = (dtos: GalleryHeaderDto[]) =>
  dtos.map(mapGalleryHeaderDtoToModel);

export { mapGalleryHeaderDtoToModel, arrayMapGalleryHeaderDtoToModel };
