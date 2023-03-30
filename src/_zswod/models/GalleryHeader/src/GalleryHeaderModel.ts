import { ImageModel } from '../../Image';

type GalleryHeaderModel = {
  id: number;
  title: string;
  previewImage: ImageModel;
  createTime: string;
};

export type { GalleryHeaderModel };
