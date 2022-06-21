import { slice } from './reducer';
import { AppDispatch } from 'src/_old_zswod/redux/store';
import { useArticlesContext } from 'src/_old_zswod/hooks/useArticlesContext';
import { Article } from 'src/_old_zswod/models/Article/article';
import { ArticlesMapper } from 'src/_old_zswod/mappers/articlesMapper';

const useGalleryActions = () => {
  const {
    actions: { getArticle, getArticlesList },
  } = useArticlesContext();

  const setGalleryAction = (gallery: Article | null) => async (dispatch: AppDispatch) => {
    try {
      let nextArticle: Article | null = null;
      if (Boolean(gallery)) {
        const response = await getArticle(gallery!.id);
        nextArticle = ArticlesMapper.ResponseToModel(response);
      }

      dispatch(slice.actions.setGallery(nextArticle));
    } catch (error) {
      dispatch(slice.actions.hasError(error.response.data));
    }
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
