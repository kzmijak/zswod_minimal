import { createContext, FC, ReactNode, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncGetArticlesAction } from '../redux/article/actions';
import { getArticles } from '../redux/article/selectors';
import { asyncGetImagesAction } from '../redux/Image/actions';
import { getImages } from '../redux/Image/selectors';
import { Article } from '../models/article';
import { Image } from '../models/image';

type ArticlesContextProps = {
  articles: Article[];
  getArticle: (articleId: number) => Article | undefined;
  getArticleGallery: (articleId: number) => Image[];
  getArticlePrimaryImage: (articleId: number) => Image;
  isLoading: boolean;
};

const ArticlesContext = createContext<ArticlesContextProps>(null!);

type ArticlesProviderProps = {
  children: ReactNode;
};

const ArticlesProvider: FC<ArticlesProviderProps> = ({ children }) => {
  const dispatch = useDispatch();

  const articles = useSelector(getArticles);
  const images = useSelector(getImages);
  let isLoading = false;
  if (articles.length === 0) dispatch(asyncGetArticlesAction());
  if (images.length === 0) dispatch(asyncGetImagesAction());
  if (images.length === 0 || articles.length === 0) {
    isLoading = true;
  }

  const getArticle = (articleId: number) => articles.find((a) => a.id === articleId);

  const getArticleGallery = (articleId: number) => images.filter((i) => i.articleId === articleId);

  const getArticlePrimaryImage = (articleId: number) => getArticleGallery(articleId)[0];

  const value: ArticlesContextProps = {
    articles,
    getArticle,
    getArticleGallery,
    getArticlePrimaryImage,
    isLoading,
  };

  return <ArticlesContext.Provider value={value}>{children}</ArticlesContext.Provider>;
};

export type { ArticlesContextProps };
export { ArticlesProvider, ArticlesContext };
