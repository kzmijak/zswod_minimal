import {
  Typography,
  Avatar,
  Card,
  CardContent,
  CardMedia,
  Stack,
  CardActionArea,
} from '@mui/material';
import { FC, MouseEvent, useState } from 'react';
import { GalleryHeaderModel } from 'src/_zswod/models/GalleryHeader';
import { displayDate } from 'src/_zswod/utils/displayDate';
import { LightboxSSR } from './LightboxSSR';

const PREVIEW_IMAGE_INDEX = 0;

type GalleryListItemProps = {
  galleryHeader: GalleryHeaderModel;
};

const GalleryListItem: FC<GalleryListItemProps> = ({ galleryHeader }) => {
  const [isHoveringOverImages, setIsHoveringOverImages] = useState(false);
  const [hoveredImageIndex, setHoveredImageIndex] = useState(-1);
  const backgroundImageIndex = isHoveringOverImages ? hoveredImageIndex : PREVIEW_IMAGE_INDEX;
  const backgroundImage = galleryHeader.previewImages[backgroundImageIndex];
  const [selectedImageIndex, setSelectedImageIndex] = useState(-1);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const lightboxImage = selectedImageIndex !== -1 ? selectedImageIndex : PREVIEW_IMAGE_INDEX;

  const openLightbox = (imageIndex: number = -1) => {
    setSelectedImageIndex(imageIndex);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const handleMouseOverMiniature = (index: number) => {
    setHoveredImageIndex(index);
    setIsHoveringOverImages(true);
  };
  const handleMouseLeaveMiniatures = () => {
    setHoveredImageIndex(-1);
    setIsHoveringOverImages(false);
  };

  const handleMiniatureClick = (event: MouseEvent, index: number) => {
    event.stopPropagation();
    setSelectedImageIndex(index);
    openLightbox(index);
  };

  const handleBackgroundClick = () => {
    setSelectedImageIndex(PREVIEW_IMAGE_INDEX);
    openLightbox(PREVIEW_IMAGE_INDEX);
  };

  return (
    <>
      <Card>
        <CardActionArea disableRipple={isHoveringOverImages} onClick={handleBackgroundClick}>
          <CardContent>
            <Stack direction="row" justifyContent="flex-end" spacing={1}>
              <Stack direction="row" spacing={1} onMouseLeave={handleMouseLeaveMiniatures}>
                {galleryHeader.previewImages.map((image, index) => (
                  <Avatar
                    key={image.id}
                    alt={image.alt}
                    src={image.src}
                    onMouseOver={() => handleMouseOverMiniature(index)}
                    onClick={(event) => handleMiniatureClick(event, index)}
                    sx={{
                      ...(hoveredImageIndex === index && { scale: '1.1' }),
                      ':active': { scale: '0.8' },
                      transition: 'all 0.2s',
                    }}
                  />
                ))}
              </Stack>
              {galleryHeader.remainingImagesCount! > 0 && (
                <Avatar sx={{ bgcolor: 'primary.main', color: 'common.white' }}>
                  +{galleryHeader.remainingImagesCount}
                </Avatar>
              )}
            </Stack>
          </CardContent>
          <CardMedia
            height={192}
            component={'img'}
            image={backgroundImage.src}
            alt={backgroundImage.alt}
          />
          <CardContent
            component={Stack}
            direction="row"
            justifyContent="space-between"
            padding={1}
            spacing={2}
          >
            <Typography variant="h6">{galleryHeader.title}</Typography>
            <Stack justifyContent="end">
              <Typography variant="caption">{displayDate(galleryHeader.createTime)}</Typography>
            </Stack>
          </CardContent>
        </CardActionArea>
      </Card>
      <LightboxSSR
        galleryId={galleryHeader.id}
        open={lightboxOpen}
        onClose={closeLightbox}
        startingGalleryImageIndex={lightboxImage}
      />
    </>
  );
};

export { GalleryListItem };
