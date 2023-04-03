import { createArrayMapper } from 'src/_zswod/utils/mapperCreators';
import { arrayMapImageDtoToModel } from '../../Image';
import { GalleryHeaderDto } from './GalleryHeaderDto';
import { GalleryHeaderModel } from './GalleryHeaderModel';

const mapGalleryHeaderDtoToModel = ({
  previewImages,
  remainingImagesCount,
  title,
  createTime,
  id,
}: GalleryHeaderDto): GalleryHeaderModel => ({
  previewImages: arrayMapImageDtoToModel(previewImages),
  remainingImagesCount,
  title,
  id,
  createTime,
});

const arrayMapGalleryHeaderDtoToModel = createArrayMapper(mapGalleryHeaderDtoToModel);

export { mapGalleryHeaderDtoToModel, arrayMapGalleryHeaderDtoToModel };
