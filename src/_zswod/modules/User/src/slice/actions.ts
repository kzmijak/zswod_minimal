import { AppDispatch } from 'src/_zswod/redux/store';
import { actions } from './reducer';

const invalidateAuthentication = () => (dispatch: AppDispatch) => {
  dispatch(actions.updateAuthenticationStatus('anonymous'));
};

export { invalidateAuthentication };
