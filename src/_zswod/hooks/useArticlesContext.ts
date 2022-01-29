import { useContext } from 'react';
import { ArticlesContext } from '../contexts/ArticlesContext';

const useArticlesContext = () => useContext(ArticlesContext);

export { useArticlesContext };
