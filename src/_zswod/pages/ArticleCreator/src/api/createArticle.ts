import { api } from 'src/_zswod/modules/Axios';
import { mapRequestError } from 'src/_zswod/utils/handleRequestError';
import { ArticleFormContent } from '../models/ArticleFormContent';
import { ImageFormContent } from '../models/ImageFormContent';

const createArticleErrorConsts = [
  'ErrFailedCreatingArticle',
  'ErrFailedCreatingArticleTitle',
  'ErrFailedCreatingImage',
  'Unknown',
] as const;
type createArticleError = typeof createArticleErrorConsts[number];
const createArticleErrorDisplayValueDict: Record<createArticleError, string> = {
  ErrFailedCreatingArticle: 'Nie udało się utworzyć artykułu',
  ErrFailedCreatingArticleTitle: 'Nie udało się przetworzyć tytułu na URL',
  ErrFailedCreatingImage: 'Nie udało się przetworzyć któregoś z obrazów',
  Unknown: 'Coś poszło nie tak',
};

const createArticle = async (article: ArticleFormContent, images: ImageFormContent[]) => {
  const response = await api.post<string>('article/create', { ...article, images });

  return response.data;
};

const getCreateArticleError = (err: any) => {
  const error = mapRequestError<createArticleError>(err, createArticleErrorConsts, 'Unknown');

  return createArticleErrorDisplayValueDict[error];
};

export { createArticle, getCreateArticleError };
