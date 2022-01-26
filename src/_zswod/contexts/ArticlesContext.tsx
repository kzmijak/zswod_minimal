import { createContext, FC, ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { getArticles } from '../redux/article/selectors';
import { getImages } from '../redux/Image/selectors';
import { Article } from '../utils/Mock/articles';
import { Image } from '../utils/Mock/images';

type ArticlesContextProps = {
  articles: Article[];
  getArticle: (articleId: number) => Article | undefined;
  getArticleGallery: (articleId: number) => Image[];
  getArticlePrimaryImage: (articleId: number) => Image;
};

const ArticlesContext = createContext<ArticlesContextProps>(null!);

type ArticlesProviderProps = {
  children: ReactNode;
};

const ArticlesProvider: FC<ArticlesProviderProps> = ({ children }) => {
  const articles = useSelector(getArticles);
  const images = useSelector(getImages);

  const getArticle = (articleId: number) => articles.find((a) => a.id === articleId);

  const getArticleGallery = (articleId: number) => images.filter((i) => i.articleId === articleId);

  const getArticlePrimaryImage = (articleId: number) => getArticleGallery(articleId)[0];

  const value: ArticlesContextProps = {
    articles,
    getArticle,
    getArticleGallery,
    getArticlePrimaryImage,
  };

  return <ArticlesContext.Provider value={value}>{children}</ArticlesContext.Provider>;
};

export type { ArticlesContextProps };
export { ArticlesProvider, ArticlesContext };
