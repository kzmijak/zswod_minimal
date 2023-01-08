import { createContext } from 'react';
import { ArticleModel, nullArticleObject } from 'src/_zswod/models/Article';
import { ImageModel } from 'src/_zswod/models/Image';

type CurrentArticleContextType = {
  article: ArticleModel;
  images: ImageModel[];
};

const CurrentArticleContext = createContext<CurrentArticleContextType>({
  article: nullArticleObject,
  images: [],
});

export { CurrentArticleContext };
