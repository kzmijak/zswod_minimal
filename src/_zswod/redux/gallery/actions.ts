import { slice } from './reducer';
import { AppDispatch } from 'src/_zswod/redux/store';
import { useArticlesContext } from 'src/_zswod/hooks/useArticlesContext';
import { Article } from 'src/_zswod/models/Article/article';

const useGalleryActions = () => {
  const {
    actions: { getArticle, getArticlesList },
  } = useArticlesContext();

  const setGalleryAction = (gallery: Article | null) => (dispatch: AppDispatch) => {
    dispatch(slice.actions.startTransition());
    setTimeout(() => {
      dispatch(slice.actions.endTransition(gallery));
    }, 100);
  };

  const asyncGetArticleAction = (id: number) => async (dispatch: AppDispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const article = await getArticle(id);

      dispatch(slice.actions.getArticleSuccess(article));
    } catch (error) {
      dispatch(slice.actions.hasError(error.response.data));
    }
  };

  const asyncGetArticlesAction = () => async (dispatch: AppDispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const articles = await getArticlesList();

      dispatch(slice.actions.getArticlesSuccess(articles));
    } catch (error) {
      dispatch(slice.actions.hasError(error.response?.data));
    }
  };

  return { asyncGetArticlesAction, asyncGetArticleAction, setGalleryAction };
};

export { useGalleryActions };
