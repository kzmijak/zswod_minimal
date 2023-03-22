import { ImageDto } from '../../Image';

type ArticleHeaderDto = {
  id: string;
  title: string;
  short: string;
  createTime: string;
  titleNormalized: string;
  previewImage: ImageDto;
};

export type { ArticleHeaderDto };
