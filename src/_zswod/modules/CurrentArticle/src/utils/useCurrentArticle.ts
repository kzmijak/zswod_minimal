import { useContext } from 'react';
import { CurrentArticleContext } from './CurrentArticleContext';

const useCurrentArticle = () => useContext(CurrentArticleContext);

export { useCurrentArticle };
