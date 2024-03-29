import { GalleryModel } from '../../Gallery';

type ArticleModel = {
  id: string;
  title: string;
  short: string;
  content: string;
  createTime: string;
  updateTime: string;
  gallery: GalleryModel;
  titleNormalized: string;
};

export type { ArticleModel };
