import { FC, ReactNode, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'src/_zswod/utils/useAppDispatch';
import { fetchArticle } from '../slice/actions';
import { selectStatus } from '../slice/selectors';

type FetchArticleProps = {
  children?: ReactNode;
  articleTitle: string;
};

const FetchArticle: FC<FetchArticleProps> = ({ articleTitle, children }) => {
  const dispatch = useAppDispatch();

  const { status } = useSelector(selectStatus);

  useEffect(() => {
    dispatch(fetchArticle(articleTitle));
  }, [articleTitle, dispatch]);

  if (status !== 'success') return null;

  return <>{children}</>;
};

export { FetchArticle };
