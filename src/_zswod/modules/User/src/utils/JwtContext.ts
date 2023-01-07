import { createContext } from 'react';

type JwtContextType = {
  token: string;
  setToken: (token: string) => void;
};

const JwtContext = createContext<JwtContextType>({
  token: '',
  setToken: () => null,
});

export { JwtContext };
