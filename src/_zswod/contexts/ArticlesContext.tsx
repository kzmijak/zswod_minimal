import { createContext, FC, ReactNode } from 'react';
import { AxiosLoadable, getAxiosLoadableInstance } from '../utils/AxiosLoadable';
import { Article, articlesMockData } from '../utils/Mock/articles';
import { Image, imagesMockData } from '../utils/Mock/images';

type ArticlesContextProps = AxiosLoadable<Article> & {
  getArticles: () => Article[];
  getArticle: (articleId: number) => Article | undefined;
  getGallery: (articleId: number) => Image[];
};

const ArticlesContext = createContext<ArticlesContextProps>(null!);

type ArticlesProviderProps = {
  children: ReactNode;
};

const ArticlesProvider: FC<ArticlesProviderProps> = ({ children }) => {
  const getArticles = () => articlesMockData;

  const getArticle = (articleId: number) => articlesMockData.find((a) => a.id === articleId);

  const getGallery = (articleId: number) => imagesMockData.filter((i) => i.articleId === articleId);

  const value: ArticlesContextProps = {
    ...getAxiosLoadableInstance<Article>(),
    getArticles,
    getArticle,
    getGallery,
  };

  return <ArticlesContext.Provider value={value}>{children}</ArticlesContext.Provider>;
};

export type { ArticlesContextProps };
export { ArticlesProvider, ArticlesContext };
