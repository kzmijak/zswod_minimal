import { FC, ReactNode } from 'react';
import { JwtContext } from '../utils/JwtContext';
import { useJwtStorage } from '../utils/useJwtStorage';

type JwtProviderProps = {
  children: ReactNode;
};

const JwtProvider: FC<JwtProviderProps> = ({ children }) => {
  const { setToken, token } = useJwtStorage();

  const logout = () => setToken(null);

  return <JwtContext.Provider value={{ setToken, token, logout }}>{children}</JwtContext.Provider>;
};

export { JwtProvider };
