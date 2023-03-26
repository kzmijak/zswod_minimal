import { ImageModel } from 'src/_zswod/models/Image';
import { api } from 'src/_zswod/modules/Axios';
import { mapRequestError } from 'src/_zswod/utils/handleRequestError';
import { ArticleFormContent } from '../models/ArticleFormContent';

const updateArticleErrorConsts = [
  'ErrCouldNotSanitizeTitle',
  'ErrCouldNotUpdate',
  'Unknown',
] as const;
type UpdateArticleError = typeof updateArticleErrorConsts[number];
const updateArticleErrorDisplayValueDict: Record<UpdateArticleError, string> = {
  ErrCouldNotSanitizeTitle: 'Nie udało się przetworzyć tytułu na URL',
  ErrCouldNotUpdate: 'Nie udało się zaktualizować artykułu',
  Unknown: 'Coś poszło nie tak',
};

const updateArticle = async (
  articleId: string,
  article: ArticleFormContent,
  images: ImageModel[]
) => {
  const response = await api.patch<string>('article/update', {
    articleId,
    article,
    images,
  });

  return response.data;
};

const getUpdateArticleError = (err: any) => {
  const error = mapRequestError<UpdateArticleError>(err, updateArticleErrorConsts, 'Unknown');

  return updateArticleErrorDisplayValueDict[error];
};

export { updateArticle, getUpdateArticleError };
