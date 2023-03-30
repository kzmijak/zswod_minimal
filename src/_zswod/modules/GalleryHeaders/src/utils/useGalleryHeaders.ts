import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'src/_zswod/utils/useAppDispatch';
import { selectAllGalleryHeaders, selectGalleryHeadersStatus } from '../slice/selectors';
import { fetchGalleryHeadersAsyncThunk } from '../slice/thunks';

const useGalleryHeaders = () => {
  const { error, status } = useSelector(selectGalleryHeadersStatus);
  const galleryHeaders = useSelector(selectAllGalleryHeaders);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchGalleryHeadersAsyncThunk());
    }
  }, [dispatch, status]);

  return { error, status, galleryHeaders };
};

export { useGalleryHeaders };
