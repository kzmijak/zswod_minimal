import { createContext, FC, ReactNode } from 'react';
import * as actions from './actions';
import * as selectors from './selectors';

type ArticlesContextProps = {
  actions: typeof actions;
  selectors: typeof selectors;
};

const ArticlesContext = createContext<ArticlesContextProps>(null!);

type ArticlesProviderProps = {
  children: ReactNode;
};

const ArticlesProvider: FC<ArticlesProviderProps> = ({ children }) => {
  const value: ArticlesContextProps = {
    actions,
    selectors,
  };

  return <ArticlesContext.Provider value={value}>{children}</ArticlesContext.Provider>;
};

export type { ArticlesContextProps };
export { ArticlesProvider, ArticlesContext };
