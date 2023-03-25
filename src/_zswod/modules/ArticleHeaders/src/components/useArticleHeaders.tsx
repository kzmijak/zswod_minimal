import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'src/_zswod/utils/useAppDispatch';
import { selectArticleHeadersStatus, selectAllArticleHeaders } from '../slice/selectors';
import { fetchArticleHeadersAsyncThunk } from '../slice/thunks';

const useArticleHeaders = () => {
  const { status, error } = useSelector(selectArticleHeadersStatus);
  const articleHeaders = useSelector(selectAllArticleHeaders);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchArticleHeadersAsyncThunk());
    }
  }, [dispatch, status]);

  return { status, error, articleHeaders };
};

export { useArticleHeaders };
