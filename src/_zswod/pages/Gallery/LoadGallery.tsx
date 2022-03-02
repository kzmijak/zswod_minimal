import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGalleryActions } from 'src/_zswod/redux/gallery/actions';
import { getGalleryState } from 'src/_zswod/redux/gallery/selectors';

type LoadGalleryProps = {};

const LoadGallery: FC<LoadGalleryProps> = ({ children }) => {
  const { asyncGetArticlesAction } = useGalleryActions();
  const { isLoaded } = useSelector(getGalleryState);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoaded) {
      dispatch(asyncGetArticlesAction());
    }
  }, [isLoaded]);

  if (!isLoaded) {
    return null;
  }

  return <>{children}</>;
};

export { LoadGallery };
