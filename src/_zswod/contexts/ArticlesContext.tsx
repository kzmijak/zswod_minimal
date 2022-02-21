import { createContext, FC, ReactNode } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  asyncCreateArticleAction,
  asyncGetArticleAction,
  asyncGetArticlesAction,
} from '../redux/article/actions';
import { getArticles, getArticleState } from '../redux/article/selectors';
import { getImages, getImagesState } from '../redux/Image/selectors';
import { Article } from '../models/Article/article';
import { Image } from '../models/Image/image';
import { CreateArticleRequest } from '../models/Article/createArticleRequest';

type ArticlesContextProps = {
  articles: Article[];
  getArticle: (articleId: number) => Article | undefined;
  getArticlesList: () => Article[];
  getArticleGallery: (articleId: number) => Image[];
  getArticlePrimaryImage: (articleId: number) => Image;
  createArticle: (request: CreateArticleRequest) => void;
  loadArticle: (id: number) => void;
  loadArticles: () => void;
  isLoading: () => boolean;
  isLoaded: () => boolean;
};

const ArticlesContext = createContext<ArticlesContextProps>(null!);

type ArticlesProviderProps = {
  children: ReactNode;
};

const ArticlesProvider: FC<ArticlesProviderProps> = ({ children }) => {
  const dispatch = useDispatch();

  const articlesState = useSelector(getArticleState);
  const imagesState = useSelector(getImagesState);
  const isLoading = () => articlesState.isLoading || imagesState.isLoading;
  const isLoaded = () => articlesState.isLoaded || imagesState.isLoaded;

  const articles = useSelector(getArticles);
  const images = useSelector(getImages);

  const createArticle = (request: CreateArticleRequest) =>
    dispatch(asyncCreateArticleAction(request));

  const loadArticle = (id: number) => dispatch(asyncGetArticleAction(id));

  const loadArticles = async () => dispatch(asyncGetArticlesAction());

  const getArticle = (articleId: number) => articles.find((a) => a.id === articleId);

  const getArticlesList = () => articles;

  const getArticleGallery = (articleId: number) => images.filter((i) => i.articleId === articleId);

  const getArticlePrimaryImage = (articleId: number) => getArticleGallery(articleId)[0];

  const value: ArticlesContextProps = {
    articles,
    getArticle,
    getArticleGallery,
    getArticlePrimaryImage,
    loadArticle,
    loadArticles,
    isLoading,
    isLoaded,
    createArticle,
    getArticlesList,
  };

  return <ArticlesContext.Provider value={value}>{children}</ArticlesContext.Provider>;
};

export type { ArticlesContextProps };
export { ArticlesProvider, ArticlesContext };
