import { ImageModel } from '../../Image';

type GalleryModel = {
  id: string;
  title: string;
  createTime: string;
  updateTime: string;
  images: ImageModel[];
};

export type { GalleryModel };
