import { Stack } from '@mui/material';
import { FC } from 'react';
import { GalleryHeaderModel } from 'src/_zswod/models/GalleryHeader';
import { GalleryListItem } from './GalleryListItem';

type GalleriesListProps = {
  galleries: GalleryHeaderModel[];
};

const GalleriesList: FC<GalleriesListProps> = ({ galleries }) => (
  <Stack spacing={5}>
    {galleries.map((gallery) => (
      <GalleryListItem key={gallery.id} galleryHeader={gallery} />
    ))}
  </Stack>
);

export { GalleriesList };
