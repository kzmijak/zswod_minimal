import { GalleryDto, mapGalleryDtoToModel } from 'src/_zswod/models/Gallery';
import { api } from 'src/_zswod/modules/Axios';

const fetchGallery = async (galleryId: string) => {
  const response = await api.get<GalleryDto>(`gallery/${galleryId}`);
  return mapGalleryDtoToModel(response.data);
};

export { fetchGallery };
