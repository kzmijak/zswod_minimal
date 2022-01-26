import { RootState } from '../store';

const getArticleState = (state: RootState) => state.article;

const getArticles = (state: RootState) => getArticleState(state).data;

export { getArticleState, getArticles };
