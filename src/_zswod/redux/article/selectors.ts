import { Article } from 'src/_zswod/models/article';
import { RootState } from '../store';

const getArticleState = (state: RootState) => state.article;

const getArticles = (state: RootState) => getArticleState(state).data;

const getNeighboringArticles = (article: Article) => (state: RootState) => {
  const newerArticles = state.article.data
    .filter((a) => a.date > article.date)
    .sort((a, b) => a.date.getTime() - b.date.getTime());

  const newerArticle = newerArticles.length > 0 ? newerArticles[0] : null;

  const olderArticles = state.article.data
    .filter((a) => a.date < article.date)
    .sort((a, b) => b.date.getTime() - a.date.getTime());

  const olderArticle = olderArticles.length > 0 ? olderArticles[0] : null;

  return {
    newerArticle,
    olderArticle,
  };
};

export { getArticleState, getArticles, getNeighboringArticles };
