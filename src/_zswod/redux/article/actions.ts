import { articlesMockData } from 'src/_zswod/utils/Mock/articles';
import { AppDispatch } from '../store';
import { slice } from './reducer';

const asyncGetArticlesAction = () => async (dispatch: AppDispatch) => {
  dispatch(slice.actions.startLoading());
  try {
    const response = articlesMockData;
    dispatch(slice.actions.getArticlesSuccess(response));
  } catch (error) {
    dispatch(slice.actions.hasError(error as string));
  }
};

export { asyncGetArticlesAction };
