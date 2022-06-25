import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchImages } from '../slice/actions';
import { selectStatus } from '../slice/selectors';

const FetchImages: FC = () => {
  const { status } = useSelector(selectStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchImages());
    }
  }, [dispatch, status]);

  return null;
};

export { FetchImages };
