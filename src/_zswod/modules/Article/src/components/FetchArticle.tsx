import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectStatus } from 'src/_zswod/modules/Images/src/slice/selectors';
import { fetchArticle } from '../slice/actions';

type FetchArticleProps = {
  articleTitle: string;
};

const FetchArticle: FC<FetchArticleProps> = ({ articleTitle, children }) => {
  const dispatch = useDispatch();

  const { status } = useSelector(selectStatus);

  useEffect(() => {
    dispatch(fetchArticle(articleTitle));
  }, [articleTitle, dispatch]);

  if (status !== 'success') return null;

  return <>{children}</>;
};

export { FetchArticle };
