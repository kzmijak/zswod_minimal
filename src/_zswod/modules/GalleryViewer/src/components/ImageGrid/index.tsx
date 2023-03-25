import { Grid } from '@mui/material';
import { FC } from 'react';
import { ImageModel } from 'src/_zswod/models/Image';
import { ImageGridItem } from './ImageGridItem';

type ImageGridProps = {
  images: ImageModel[];
  mutable?: boolean;
  onImagesChange?: (images: ImageModel[]) => void;
};
const ImageGrid: FC<ImageGridProps> = ({ images, mutable, onImagesChange }) => {
  const replaceImage = (index: number, imageToInsert: ImageModel | null) => {
    const imagesCopy = [...images];

    if (Boolean(imageToInsert)) {
      imagesCopy.splice(index, 1, imageToInsert!);
    } else {
      imagesCopy.splice(index, 1);
    }

    return imagesCopy;
  };

  const handleImageChange = (image: ImageModel, index: number) => {
    const imagesAfterChange = replaceImage(index, image);
    onImagesChange?.(imagesAfterChange);
  };

  const handleImageRemove = (index: number) => {
    const imagesAfterChange = replaceImage(index, null);
    onImagesChange?.(imagesAfterChange);
  };

  return (
    <Grid container>
      {images.map((image, index) => (
        <Grid key={image.id} item xs={12} sm={6} md={4} lg={3}>
          <ImageGridItem
            image={image}
            mutable={mutable}
            onImageChange={(changedImage) => handleImageChange(changedImage, index)}
            onRemove={() => handleImageRemove(index)}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export { ImageGrid };
