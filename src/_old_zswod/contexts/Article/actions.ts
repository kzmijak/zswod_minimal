import axios from 'axios';
import { HOST_API } from 'src/_old_zswod/config';
import { ArticleResponse } from 'src/_old_zswod/models/Article/articleResponse';
import { CreateArticleRequest } from 'src/_old_zswod/models/Article/createArticleRequest';
import { ImageResponse } from 'src/_old_zswod/models/Image/imageResponse';

const getArticle = (articleId: number) =>
  axios.get<ArticleResponse>(`${HOST_API}/articles/${articleId}`).then((response) => response.data);

const getArticlesList = (count?: number) =>
  axios
    .get<ArticleResponse[]>(`${HOST_API}/articles`, { params: { count } })
    .then((response) => response.data);

const createArticle = async (request: CreateArticleRequest) =>
  axios.post<ArticleResponse>(`${HOST_API}/articles`, request).then((response) => response.data);

const getSampleImages = async (count?: number) =>
  axios
    .get<ImageResponse[]>(`${HOST_API}/articles/get-sample-images`, { params: { count } })
    .then((response) => response.data);

export { getArticle, getArticlesList, createArticle, getSampleImages };
