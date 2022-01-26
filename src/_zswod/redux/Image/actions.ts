import { imagesMockData } from 'src/_zswod/utils/Mock/images';
import { AppDispatch } from '../store';
import { slice } from './reducer';

const asyncGetImagesAction = () => async (dispatch: AppDispatch) => {
  dispatch(slice.actions.startLoading());
  try {
    const response = imagesMockData;
    dispatch(slice.actions.getImagesSuccess(response));
  } catch (error) {
    dispatch(slice.actions.hasError(error as string));
  }
};

export { asyncGetImagesAction };
