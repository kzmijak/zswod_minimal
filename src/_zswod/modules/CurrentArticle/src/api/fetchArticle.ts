import { ArticleDto, ArticleModel, mapArticleDtoToModel } from 'src/_zswod/models/Article';
import { ImageDto, ImageModel, arrayMapImageDtoToModel } from 'src/_zswod/models/Image';
import { api } from 'src/_zswod/modules/Axios';
import { mapRequestError } from 'src/_zswod/utils/handleRequestError';

type ArticleResponseDto = { article: ArticleDto; images: ImageDto[] };
type ArticleResponseModel = { article: ArticleModel; images: ImageModel[] };

const fetchArticleErrorConsts = ['ErrArticleTitleNotFound', 'Unknown'] as const;
type FetchArticleError = typeof fetchArticleErrorConsts[number];
const fetchArticleErrorDisplayValueDict: Record<FetchArticleError, string> = {
  ErrArticleTitleNotFound: 'Nie udało się znaleźć artykułu o takim tytule',
  Unknown: 'Coś poszło nie tak',
};

const fetchArticle = async (titleNormalized: string): Promise<ArticleResponseModel> => {
  const response = await api.get<ArticleResponseDto>(`article/${titleNormalized}`);
  console.log(response);
  const { article, images } = response.data;

  return {
    article: mapArticleDtoToModel(article),
    images: arrayMapImageDtoToModel(images),
  };
};

const getFetchArticleError = (err: any) => {
  const error = mapRequestError<FetchArticleError>(err, fetchArticleErrorConsts, 'Unknown');

  return fetchArticleErrorDisplayValueDict[error];
};

export { fetchArticle, getFetchArticleError };
