import { ImageDto } from '../../Image';

type GalleryHeaderDto = {
  id: string;
  title: string;
  previewImages: ImageDto[];
  remainingImagesCount?: number;
  createTime: string;
};

export type { GalleryHeaderDto };
