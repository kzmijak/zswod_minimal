import { FC, ReactNode, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectStatus } from 'src/_zswod/modules/Images/src/slice/selectors';
import { useAppDispatch } from 'src/_zswod/utils/useAppDispatch';
import { fetchArticle } from '../slice/actions';

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
