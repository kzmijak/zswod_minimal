import { arrayMapGalleryHeaderDtoToModel, GalleryHeaderDto } from 'src/_zswod/models/GalleryHeader';
import { api } from 'src/_zswod/modules/Axios';

const fetchGalleryHeaders = async () => {
  const response = await api.get<GalleryHeaderDto[]>('gallery');
  return arrayMapGalleryHeaderDtoToModel(response.data);
};

export { fetchGalleryHeaders };
