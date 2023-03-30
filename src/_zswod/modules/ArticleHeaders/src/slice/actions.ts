import { AppDispatch } from 'src/_zswod/redux/store';
import { actions } from './reducer';
import { removeArticleAsyncThunk } from './thunks';

const invalidateArticlesFetch = () => (dispatch: AppDispatch) => {
  dispatch(actions.invalidateFetch());
};

const removeArticleById = (articleId: string) => (dispatch: AppDispatch) => {
  dispatch(removeArticleAsyncThunk(articleId));
};

export { removeArticleById, invalidateArticlesFetch };
