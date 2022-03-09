import { Article } from 'src/_zswod/models/Article/article';

const getNeighboringArticles = (article: Article, scope: Article[]) => {
  const newerArticles = scope
    .filter((a) => a.date > article.date)
    .sort((a, b) => a.date.getTime() - b.date.getTime());

  const newerArticle = newerArticles.length > 0 ? newerArticles[0] : null;

  const olderArticles = scope
    .filter((a) => a.date < article.date)
    .sort((a, b) => b.date.getTime() - a.date.getTime());

  const olderArticle = olderArticles.length > 0 ? olderArticles[0] : null;

  return {
    newerArticle,
    olderArticle,
  };
};

export { getNeighboringArticles };
