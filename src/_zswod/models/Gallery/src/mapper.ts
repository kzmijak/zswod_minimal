import { arrayMapImageDtoToModel } from '../../Image';
import { GalleryDto } from './GalleryDto';
import { GalleryModel } from './GalleryModel';

const mapGalleryDtoToModel = ({ images, title }: GalleryDto): GalleryModel => ({
  title,
  images: arrayMapImageDtoToModel(images),
});

export { mapGalleryDtoToModel };
