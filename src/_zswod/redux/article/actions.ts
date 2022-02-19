import { AppDispatch } from '../store';
import { slice } from './reducer';
import axios from 'axios';
import { HOST_API } from 'src/_zswod/config';

type ArticleResponse = {
  id: number;
  title: string;
  short: string;
  content: string;
  date: Date;
};

const asyncGetArticlesAction = () => async (dispatch: AppDispatch) => {
  dispatch(slice.actions.startLoading());
  try {
    const response = await axios.get<ArticleResponse[]>(`${HOST_API}/articles`);

    dispatch(slice.actions.getArticlesSuccess(response.data));
  } catch (error) {
    dispatch(slice.actions.hasError(error as string));
  }
};

export { asyncGetArticlesAction };
