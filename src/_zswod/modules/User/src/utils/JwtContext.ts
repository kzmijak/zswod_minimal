import { createContext } from 'react';

type JwtContextType = {
  token: string;
  setToken: (token: string) => void;
  logout: () => void;
};

const JwtContext = createContext<JwtContextType>({
  token: '',
  setToken: () => null,
  logout: () => null,
});

export { JwtContext };
