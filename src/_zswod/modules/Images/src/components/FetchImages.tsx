import { FC, ReactNode, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'src/_zswod/utils/useAppDispatch';
import { fetchImages } from '../slice/actions';
import { selectStatus } from '../slice/selectors';

type FetchImagesProps = {
  children?: ReactNode;
};

const FetchImages: FC<FetchImagesProps> = ({ children }) => {
  const { status } = useSelector(selectStatus);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchImages());
    }
  }, [dispatch, status]);

  if (status !== 'success') {
    return null;
  }

  return <>{children}</>;
};

export { FetchImages };
