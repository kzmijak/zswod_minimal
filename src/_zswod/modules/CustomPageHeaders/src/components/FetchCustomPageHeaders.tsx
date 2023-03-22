import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'src/_zswod/utils/useAppDispatch';
import { selectCustomPageHeadersStatus } from '../slice/selectors';
import { fetchCustomPageHeadersAsyncThunk } from '../slice/thunks';

const FetchCustomPageHeaders: FC = () => {
  const { status } = useSelector(selectCustomPageHeadersStatus);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchCustomPageHeadersAsyncThunk());
    }
  }, [dispatch, status]);

  return null;
};

export { FetchCustomPageHeaders };
