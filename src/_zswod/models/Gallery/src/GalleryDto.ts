import { ImageDto } from '../../Image';

type GalleryDto = {
  id: string;
  title: string;
  createTime: string;
  updateTime: string;
  images: ImageDto[];
};

export type { GalleryDto };
