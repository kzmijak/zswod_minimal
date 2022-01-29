import { useSelector } from 'react-redux';
import { AppDispatch } from '../store';
import { slice } from './reducer';

const setGalleryAction = (gallery: number | null) => (dispatch: AppDispatch) => {
  dispatch(slice.actions.startTransition());
  setTimeout(() => {
    dispatch(slice.actions.endTransition(gallery));
  }, 100);
};

export { setGalleryAction };
