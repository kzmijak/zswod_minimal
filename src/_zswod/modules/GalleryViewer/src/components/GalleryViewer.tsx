import { Stack, Typography } from '@mui/material';
import moment from 'moment';
import { FC } from 'react';
import { GalleryModel } from 'src/_zswod/models/Gallery';
import { ImageModel } from 'src/_zswod/models/Image';
import { ImageCreator } from './ImageCreator';
import { ImageGrid } from './ImageGrid';

type ConditionalDateProps = {
  dateString: string | undefined;
  label: string;
};
const ConditionalDate: FC<ConditionalDateProps> = ({ dateString, label }) => {
  if (!Boolean(dateString)) return null;

  return (
    <Typography>
      {label}: {moment(dateString).toLocaleString()}
    </Typography>
  );
};

const concatUniqueImages = (existingImages: ImageModel[], newImages: ImageModel[]) => {
  const existingUrls = existingImages.map((image) => image.src);
  const uniqueNewImages = newImages.filter((newImage) => !existingUrls.includes(newImage.src));
  return [...existingImages, ...uniqueNewImages];
};

type GalleryViewerProps = {
  gallery: Pick<GalleryModel, 'createTime' | 'images' | 'title' | 'updateTime'>;
  mutable?: boolean;
  onImagesChange?: (images: ImageModel[]) => void;
  showTimestamps?: boolean;
};
const GalleryViewer: FC<GalleryViewerProps> = ({
  gallery: { createTime, images, title, updateTime },
  mutable = false,
  onImagesChange,
  showTimestamps,
}) => {
  const handleCreateImage = (newImagesBatch: ImageModel[]) => {
    const imagesMerged = concatUniqueImages(images, newImagesBatch);
    onImagesChange?.(imagesMerged);
  };

  return (
    <Stack padding={2}>
      <Typography variant="h4">{title}</Typography>
      {mutable && <ImageCreator onCreate={handleCreateImage} startingOrder={images.length} />}
      <ImageGrid images={images} mutable={mutable} onImagesChange={onImagesChange} />
      {showTimestamps && (
        <>
          <ConditionalDate label="Utworzono" dateString={createTime} />
          <ConditionalDate label="Ostatnia aktualizacja" dateString={updateTime} />
        </>
      )}
    </Stack>
  );
};

export { GalleryViewer };
