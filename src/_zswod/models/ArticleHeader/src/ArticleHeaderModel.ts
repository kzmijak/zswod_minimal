import { ImageModel } from '../../Image';

type ArticleHeaderModel = {
  id: string;
  title: string;
  short: string;
  uploadDate: string;
  titleNormalized: string;
  previewImage: ImageModel;
};

export type { ArticleHeaderModel };
