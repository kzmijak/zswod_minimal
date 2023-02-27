import { FC, ReactNode, useEffect } from 'react';
import { useAppDispatch } from 'src/_zswod/utils/useAppDispatch';
import { invalidateAuthentication } from '../slice/actions';
import { fetchCurrentUserAsyncThunk } from '../slice/thunks';
import { JwtContext } from '../utils/JwtContext';
import { useJwtStorage } from '../utils/useJwtStorage';

type JwtProviderProps = {
  children: ReactNode;
};

const JwtProvider: FC<JwtProviderProps> = ({ children }) => {
  const { setToken, token } = useJwtStorage();
  const dispatch = useAppDispatch();

  const login = (token: string) => {
    setToken(token);
  };

  useEffect(() => {
    if (Boolean(token)) {
      dispatch(fetchCurrentUserAsyncThunk());
    }
  }, [dispatch, token]);

  const logout = () => {
    setToken(null);
    dispatch(invalidateAuthentication());
  };

  return <JwtContext.Provider value={{ login, token, logout }}>{children}</JwtContext.Provider>;
};

export { JwtProvider };
