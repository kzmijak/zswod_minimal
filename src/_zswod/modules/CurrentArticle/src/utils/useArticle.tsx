import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'src/_zswod/utils/useAppDispatch';
import { selectCurrentArticleStatus } from '../slice/selectors';
import { fetchArticleAsyncThunk } from '../slice/thunks';

const useArticle = (titleNormalized: string | undefined) => {
  const { status, error } = useSelector(selectCurrentArticleStatus);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (Boolean(titleNormalized)) {
      dispatch(fetchArticleAsyncThunk(titleNormalized!));
    }
  }, [dispatch, titleNormalized]);

  return { status, error };
};

export { useArticle };
