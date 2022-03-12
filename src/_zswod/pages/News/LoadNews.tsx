import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNewsActions } from 'src/_zswod/redux/news/actions';
import { getNewsState } from 'src/_zswod/redux/news/selectors';

type LoadNewsProps = {};

const LoadNews: FC<LoadNewsProps> = ({ children }) => {
  const { asyncGetArticlesAction } = useNewsActions();
  const { isLoaded } = useSelector(getNewsState);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoaded) {
      dispatch(asyncGetArticlesAction());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoaded]);

  if (!isLoaded) {
    return null;
  }

  return <>{children}</>;
};

export { LoadNews };
