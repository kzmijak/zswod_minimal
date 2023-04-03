import { Backdrop, CircularProgress } from '@mui/material';
import { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { LightboxModal } from 'src/_zswod/components/LightboxModal';
import { GalleryModel } from 'src/_zswod/models/Gallery';
import { useGallery, selectCurrentGalleryImages } from 'src/_zswod/modules/CurrentGallery';

type LightboxSSRProps = {
  open: boolean;
  onClose: VoidFunction;
  startingGalleryImageIndex?: number;
  galleryId: GalleryModel['id'];
};

const LightboxSSRGuard: FC<LightboxSSRProps> = (props) => {
  if (!props.open) {
    document.body.style.overflow = 'unset';
    return null;
  }

  return <LightboxSSR {...props} />;
};
const LightboxSSR: FC<LightboxSSRProps> = ({
  startingGalleryImageIndex = 0,
  onClose,
  open,
  galleryId,
}) => {
  const [imageIndex, setImageIndex] = useState(startingGalleryImageIndex);
  const { status } = useGallery(galleryId);
  const images = useSelector(selectCurrentGalleryImages);

  if (status !== 'success') {
    return (
      <Backdrop open>
        <CircularProgress />
      </Backdrop>
    );
  }

  return (
    <>
      <LightboxModal
        images={images}
        photoIndex={imageIndex}
        setPhotoIndex={setImageIndex}
        onClose={onClose}
        open={open}
      />
    </>
  );
};

export { LightboxSSRGuard as LightboxSSR };
