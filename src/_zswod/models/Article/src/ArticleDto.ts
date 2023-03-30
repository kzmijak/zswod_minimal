import { GalleryDto } from '../../Gallery';

type ArticleDto = {
  id: string;
  title: string;
  short: string;
  content: string;
  createTime: string;
  updateTime: string;
  gallery: GalleryDto;
  titleNormalized: string;
};

export type { ArticleDto };
