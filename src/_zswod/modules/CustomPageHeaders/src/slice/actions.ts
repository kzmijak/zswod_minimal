import { AppDispatch } from 'src/_zswod/redux/store';
import { actions } from './reducer';

const invalidateCustomPagesFetch = () => (dispatch: AppDispatch) => {
  dispatch(actions.invalidateCustomPagesFetch());
};

export { invalidateCustomPagesFetch };
