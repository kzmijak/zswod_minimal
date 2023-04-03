import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'src/_zswod/utils/useAppDispatch';
import { selectCurrentGalleryId, selectCurrentGalleryStatus } from '../slice/selectors';
import { fetchGalleryAsyncThunk } from '../slice/thunks';

const useGallery = (galleryId: string) => {
  const dispatch = useAppDispatch();

  const { status, error } = useSelector(selectCurrentGalleryStatus);
  const currentGalleryId = useSelector(selectCurrentGalleryId);

  useEffect(() => {
    const requestedDifferentGallery = galleryId !== currentGalleryId;
    const galleryNotFetched = status === 'idle';
    if (requestedDifferentGallery || galleryNotFetched) {
      dispatch(fetchGalleryAsyncThunk(galleryId));
    }
  }, [currentGalleryId, dispatch, galleryId, status]);

  return { status, error };
};

export { useGallery };
