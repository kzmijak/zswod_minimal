import { AppDispatch } from '../store';
import { slice } from './reducer';
import axios from 'axios';
import { HOST_API } from 'src/_zswod/config';

const asyncGetImagesAction = () => async (dispatch: AppDispatch) => {
  dispatch(slice.actions.startLoading());
  try {
    const response = await axios.get(`${HOST_API}/api/images`);
    dispatch(slice.actions.getImagesSuccess(response.data));
  } catch (error) {
    dispatch(slice.actions.hasError(error as string));
  }
};

export { asyncGetImagesAction };
