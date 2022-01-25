import { useContext } from 'react';
import { ArticlesContext } from '../contexts/ArticlesContext';

const useArticles = () => useContext(ArticlesContext);

export { useArticles };
