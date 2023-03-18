import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'src/_zswod/utils/useAppDispatch';
import { selectArticleHeadersStatus, fetchArticleHeadersAsyncThunk } from '../..';

const FetchArticleHeaders: FC = () => {
  const { status } = useSelector(selectArticleHeadersStatus);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchArticleHeadersAsyncThunk());
    }
  }, [dispatch, status]);

  return null;
};

export { FetchArticleHeaders };
