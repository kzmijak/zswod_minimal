import { ImageModel } from '../../Image';

type ArticleHeaderModel = {
  id: string;
  title: string;
  short: string;
  createTime: string;
  titleNormalized: string;
  previewImage: ImageModel;
};

export type { ArticleHeaderModel };
