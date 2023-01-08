import { FC, ReactNode, useCallback, useEffect, useState } from 'react';
import {
  ArticleDto,
  ArticleModel,
  mapArticleDtoToModel,
  nullArticleObject,
} from 'src/_zswod/models/Article';
import { arrayMapImageDtoToModel, ImageDto, ImageModel } from 'src/_zswod/models/Image';
import { api } from 'src/_zswod/modules/Axios';
import { RequestStatus } from 'src/_zswod/utils/requestStatus';
import { CurrentArticleContext } from '../utils/CurrentArticleContext';

type ArticleResponseDto = { article: ArticleDto; images: ImageDto[] };
type ArticleResponseModel = { article: ArticleModel; images: ImageModel[] };

const executeFetchArticle = async (titleNormalized: string): Promise<ArticleResponseModel> => {
  const response = await api.get<ArticleResponseDto>(`article/${titleNormalized}`);
  const { article, images } = response.data;

  return {
    article: mapArticleDtoToModel(article),
    images: arrayMapImageDtoToModel(images),
  };
};

type CurrentArticleProviderProps = {
  titleNormalized: string;
  children: ReactNode;
};

const CurrentArticleProvider: FC<CurrentArticleProviderProps> = ({ titleNormalized, children }) => {
  const [requestStatus, setRequestStatus] = useState<RequestStatus>('idle');
  const [article, setArticle] = useState<ArticleModel>(nullArticleObject);
  const [images, setImages] = useState<ImageModel[]>([]);

  const fetchArticle = useCallback(async () => {
    setRequestStatus('loading');
    setArticle(nullArticleObject);
    setImages([]);
    try {
      const { article, images } = await executeFetchArticle(titleNormalized);
      setRequestStatus('success');
      setArticle(article);
      setImages(images);
    } catch {
      setRequestStatus('error');
    }
  }, [titleNormalized]);

  useEffect(() => {
    if (requestStatus === 'idle') {
      fetchArticle();
    }
  }, [fetchArticle, requestStatus, titleNormalized]);

  return (
    <CurrentArticleContext.Provider
      value={{
        article,
        images,
      }}
    >
      {children}
    </CurrentArticleContext.Provider>
  );
};

export { CurrentArticleProvider };
