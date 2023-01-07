import { FC, ReactNode } from 'react';
import { JwtContext } from '../utils/JwtContext';
import { useJwtStorage } from '../utils/useJwtStorage';

type JwtProviderProps = {
  children: ReactNode;
};

const JwtProvider: FC<JwtProviderProps> = ({ children }) => {
  const { setToken, token } = useJwtStorage();

  return <JwtContext.Provider value={{ setToken, token }}>{children}</JwtContext.Provider>;
};

export { JwtProvider };
