import { Typography, Stack, Container } from '@mui/material';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Page } from 'src/_zswod/components/Page';
import { selectAllGalleryHeaders, useGalleryHeaders } from 'src/_zswod/modules/GalleryHeaders';
import { RequireRole } from 'src/_zswod/modules/User';
import { GalleriesList } from '../components/GalleriesList';
import { GalleryToolbar } from '../components/GalleryToolbar';

const GalleriesListView: FC = () => {
  useGalleryHeaders();
  const galleryHeaders = useSelector(selectAllGalleryHeaders);

  return (
    <Page title="Nowości">
      <Container maxWidth="sm">
        <Typography variant="h2">Galerie</Typography>
        <Typography variant="h4">Tylko przyjemności dla Twojego oka</Typography>
        <Stack spacing={7}>
          <RequireRole role="Teacher">
            <GalleryToolbar />
          </RequireRole>
          <GalleriesList galleries={galleryHeaders} />
        </Stack>
      </Container>
    </Page>
  );
};

export { GalleriesListView };
