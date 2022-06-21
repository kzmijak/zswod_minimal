import { useContext } from 'react';
import { ArticlesContext } from '../contexts/Article/ArticlesContext';

const useArticlesContext = () => useContext(ArticlesContext);

export { useArticlesContext };
