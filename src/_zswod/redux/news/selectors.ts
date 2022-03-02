import { RootState } from '../store';

const getNewsState = (state: RootState) => state.news;

const getCurrentArticle = (state: RootState) => state.news.currentArticle;

const getArticles = (state: RootState) => state.news.data;

export { getCurrentArticle, getArticles, getNewsState };
