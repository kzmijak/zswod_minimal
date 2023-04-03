import { ImageModel } from '../../Image';

type GalleryHeaderModel = {
  id: string;
  title: string;
  previewImages: ImageModel[];
  remainingImagesCount?: number;
  createTime: string;
};

export type { GalleryHeaderModel };
