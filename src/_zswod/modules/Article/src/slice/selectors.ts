import { RootState } from 'src/_zswod/redux/store';

const selectStatus = (state: RootState) => ({
  status: state.article.status,
  error: state.article.error,
});

export { selectStatus };
