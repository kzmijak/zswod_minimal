import { arrayMapImageDtoToModel } from '../../Image';
import { GalleryDto } from './GalleryDto';
import { GalleryModel } from './GalleryModel';

const mapGalleryDtoToModel = ({
  images,
  title,
  createTime,
  id,
  updateTime,
}: GalleryDto): GalleryModel => ({
  id,
  title,
  createTime: new Date(createTime).toISOString(),
  updateTime: new Date(updateTime).toISOString(),
  images: arrayMapImageDtoToModel(images),
});

export { mapGalleryDtoToModel };
