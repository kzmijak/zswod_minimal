import { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectArticleHeadersStatus, fetchArticleHeaders } from '../..';

const FetchArticleHeaders: FC = () => {
  const { status } = useSelector(selectArticleHeadersStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchArticleHeaders());
    }
  }, [dispatch, status]);

  return null;
};

export { FetchArticleHeaders };
