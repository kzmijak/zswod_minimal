import { AppDispatch } from '../store';
import { slice } from './reducer';
import axios from 'axios';
import { HOST_API } from 'src/_zswod/config';
import { ArticleResponse } from 'src/_zswod/models/Article/articleResponse';
import { CreateArticleRequest } from 'src/_zswod/models/Article/createArticleRequest';

const asyncGetArticleAction = (id: number) => async (dispatch: AppDispatch) => {
  dispatch(slice.actions.startLoading());
  try {
    const response = await axios.get<ArticleResponse>(`${HOST_API}/articles/${id}`);

    dispatch(slice.actions.getArticleSuccess(response.data));
  } catch (error) {
    dispatch(slice.actions.hasError(error.response.data));
  }
};

const asyncGetArticlesAction = () => async (dispatch: AppDispatch) => {
  dispatch(slice.actions.startLoading());
  try {
    const response = await axios.get<ArticleResponse[]>(`${HOST_API}/articles`);

    dispatch(slice.actions.getArticlesSuccess(response.data));
  } catch (error) {
    dispatch(slice.actions.hasError(error.response.data));
  }
};

const asyncCreateArticleAction =
  (request: CreateArticleRequest) => async (dispatch: AppDispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.post<ArticleResponse>(`${HOST_API}/articles`, request);

      dispatch(slice.actions.postArticleSuccess(response.data));

      return response.data.id;
    } catch (error) {
      dispatch(slice.actions.hasError(error.response.data));
    }
  };

export { asyncGetArticlesAction, asyncGetArticleAction, asyncCreateArticleAction };
