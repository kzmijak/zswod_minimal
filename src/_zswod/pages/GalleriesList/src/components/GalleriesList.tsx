import { Container, Typography, Stack } from '@mui/material';
import { FC } from 'react';
import Scrollbar from 'src/components/Scrollbar';
import { GalleryPicker } from '../../../Gallery/src/components/GalleryPicker';
import { GalleryPresenter } from '../../../Gallery/src/components/GalleryPresenter';

const GalleriesList: FC = () => (
  <>
    <Container>
      <Typography variant="h1" sx={{ mb: 5 }}>
        Galeria
      </Typography>
    </Container>
    <Scrollbar>
      <Stack direction="row">
        <GalleryPicker />
        <GalleryPresenter />
      </Stack>
    </Scrollbar>
  </>
);

export { GalleriesList };
