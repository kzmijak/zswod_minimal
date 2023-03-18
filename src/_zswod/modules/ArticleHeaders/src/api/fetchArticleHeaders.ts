import { ArticleHeaderDto, arrayMapArticleHeaderDtoToModel } from 'src/_zswod/models/ArticleHeader';
import { api } from 'src/_zswod/modules/Axios';
import { mapRequestError } from 'src/_zswod/utils/handleRequestError';

const fetchArticleHeadersErrorConsts = ['ErrFailedToQueryArticleHeaders', 'Unknown'] as const;
type FetchArticleHeadersError = typeof fetchArticleHeadersErrorConsts[number];
const fetchArticleHeadersErrorDisplayValueDict: Record<FetchArticleHeadersError, string> = {
  ErrFailedToQueryArticleHeaders: 'Nie udało się pobrać listy artykułów',
  Unknown: 'Coś poszło nie tak',
};

const fetchArticleHeaders = async () => {
  const response = await api.get<ArticleHeaderDto[]>('article');
  return arrayMapArticleHeaderDtoToModel(response.data);
};

const getFetchArticleHeadersError = (err: any) => {
  const error = mapRequestError<FetchArticleHeadersError>(
    err,
    fetchArticleHeadersErrorConsts,
    'Unknown'
  );
  return fetchArticleHeadersErrorDisplayValueDict[error];
};

export { fetchArticleHeaders, getFetchArticleHeadersError };
