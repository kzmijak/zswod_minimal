import { ArticleDto, ArticleModel, mapArticleDtoToModel } from 'src/_zswod/models/Article';
import { api } from 'src/_zswod/modules/Axios';
import { mapRequestError } from 'src/_zswod/utils/handleRequestError';

const fetchArticleErrorConsts = ['ErrArticleTitleNotFound', 'Unknown'] as const;
type FetchArticleError = typeof fetchArticleErrorConsts[number];
const fetchArticleErrorDisplayValueDict: Record<FetchArticleError, string> = {
  ErrArticleTitleNotFound: 'Nie udało się znaleźć artykułu o takim tytule',
  Unknown: 'Coś poszło nie tak',
};

const fetchArticle = async (titleNormalized: string): Promise<ArticleModel> => {
  const response = await api.get<ArticleDto>(`article/${titleNormalized}`);

  return mapArticleDtoToModel(response.data);
};

const getFetchArticleError = (err: any) => {
  const error = mapRequestError<FetchArticleError>(err, fetchArticleErrorConsts, 'Unknown');

  return fetchArticleErrorDisplayValueDict[error];
};

export { fetchArticle, getFetchArticleError };
