import { AppDispatch } from '../store';
import { slice } from './reducer';
import axios from 'axios';
import { HOST_API } from 'src/_zswod/config';
import { Article } from 'src/_zswod/models/article';

const asyncGetArticlesAction = () => async (dispatch: AppDispatch) => {
  dispatch(slice.actions.startLoading());
  try {
    const response = await axios.get<Article[]>(`${HOST_API}/api/articles`);
    dispatch(slice.actions.getArticlesSuccess(response.data));
  } catch (error) {
    dispatch(slice.actions.hasError(error as string));
  }
};

export { asyncGetArticlesAction };
