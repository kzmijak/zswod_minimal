import { ArticleHeaderModel } from 'src/_zswod/models/ArticleHeader';
import { nullImageObject } from 'src/_zswod/models/Image';

type GetterOptions = {
  onEmpty: 'nullObject' | 'null';
};

const getArticleHeaderPreviewImage = ({ images }: ArticleHeaderModel, options?: GetterOptions) => {
  const fallback = options?.onEmpty === 'nullObject' ? nullImageObject : null;

  return images.length > 0 ? images[0] : fallback;
};

export { getArticleHeaderPreviewImage };
