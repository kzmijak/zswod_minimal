import { RootState } from 'src/_zswod/redux/store';

const selectStatus = (state: RootState) => ({
  status: state.article.status,
  error: state.article.error,
});

const selectCurrentArticle = (state: RootState) => state.article.article;

export { selectStatus, selectCurrentArticle };
