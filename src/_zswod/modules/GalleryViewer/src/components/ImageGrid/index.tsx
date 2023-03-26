import { Grid } from '@mui/material';
import { AnimatePresence, m } from 'framer-motion';
import { FC, useState } from 'react';
import { LightboxModal } from 'src/_zswod/components/LightboxModal';
import { ImageModel } from 'src/_zswod/models/Image';
import { ImageGridItem } from './ImageGridItem';

const recalculateOrder = (images: ImageModel[]) =>
  images.map<ImageModel>((image, index) => {
    if (index === 0) {
      return { ...image, order: 0 };
    } else {
      const currentOrder = images[index].order;
      const previousOrder = images[index - 1].order;
      const designatedOrder = previousOrder + 1;
      if (currentOrder === designatedOrder) return image;
      return { ...image, order: designatedOrder };
    }
  });

type ImageGridProps = {
  images: ImageModel[];
  mutable?: boolean;
  onImagesChange?: (images: ImageModel[]) => void;
};
const ImageGrid: FC<ImageGridProps> = ({ images, mutable, onImagesChange }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImageIndex, setLightboxImageIndex] = useState(-1);

  const openLightbox = (index: number) => {
    setLightboxImageIndex(index);
    setLightboxOpen(true);
  };
  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const replaceImage = (index: number, imageToInsert: ImageModel | null) => {
    const imagesCopy = [...images];

    if (Boolean(imageToInsert)) {
      imagesCopy.splice(index, 1, imageToInsert!);
    } else {
      imagesCopy.splice(index, 1);
    }

    return imagesCopy;
  };

  const editImage = (image: ImageModel, index: number) => {
    const imagesAfterChange = replaceImage(index, image);
    recalculateAndSubmit(imagesAfterChange);
  };

  const removeImage = (index: number) => {
    const imagesAfterChange = replaceImage(index, null);
    recalculateAndSubmit(imagesAfterChange);
  };

  const recalculateAndSubmit = (images: ImageModel[]) => {
    const recalculated = recalculateOrder(images);
    onImagesChange?.(recalculated);
  };

  return (
    <>
      <Grid container spacing={1} padding={1}>
        <AnimatePresence>
          {images.map((image, index) => (
            <Grid
              component={m.div}
              initial={{ scale: 0.4 }}
              animate={{ scale: 1, transition: { type: 'spring', duration: 0.4 } }}
              exit={{ scale: 0.8, opacity: 0, transition: { bounce: 0, duration: 0.2 } }}
              key={image.id}
              item
              xs={12}
              md={6}
            >
              <ImageGridItem
                image={image}
                mutable={mutable}
                onFullScreenOpen={() => openLightbox(index)}
                onImageChange={(changedImage) => editImage(changedImage, index)}
                onRemove={() => removeImage(index)}
              />
            </Grid>
          ))}
        </AnimatePresence>
      </Grid>
      <LightboxModal
        images={images}
        onClose={closeLightbox}
        open={lightboxOpen}
        photoIndex={lightboxImageIndex}
        setPhotoIndex={openLightbox}
      />
    </>
  );
};

export { ImageGrid };
