import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'src/_zswod/utils/useAppDispatch';
import { fetchImages } from '../slice/actions';
import { selectStatus } from '../slice/selectors';

const FetchImages: FC = () => {
  const { status } = useSelector(selectStatus);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchImages());
    }
  }, [dispatch, status]);

  return null;
};

export { FetchImages };
