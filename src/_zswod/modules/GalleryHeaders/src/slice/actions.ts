import { AppDispatch } from 'src/_zswod/redux/store';
import { actions } from './reducer';

const invalidateGalleryHeadersFetch = () => (dispatch: AppDispatch) => {
  dispatch(actions.invalidateFetch());
};

export { invalidateGalleryHeadersFetch };
