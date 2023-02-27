import { createContext } from 'react';

type JwtContextType = {
  token: string;
  login: (token: string) => void;
  logout: () => void;
};

const JwtContext = createContext<JwtContextType>({
  token: '',
  login: () => null,
  logout: () => null,
});

export { JwtContext };
