import { Container, Stack, Typography } from '@mui/material';
import { FC } from 'react';
import { Page } from 'src/_zswod/components';
import { galleryGreeter, useGreeter } from 'src/_zswod/utils/Greeters/useGreeter';
import { GalleryMobile } from './Mobile/mobile';
import { Picker } from './Picker/Picker';
import { Presenter } from './Presenter/Presenter';

const Gallery: FC = () => {
  const greeter = useGreeter(galleryGreeter);

  return (
    <Page>
      <Container>
        <Typography component="div" variant="overline" sx={{ color: 'text.disabled' }}>
          {greeter}
        </Typography>
        <Typography variant="h1" sx={{ mb: 5 }}>
          Galeria
        </Typography>
      </Container>
      <Stack direction="row">
        <Picker />
        <Presenter />
      </Stack>
    </Page>
  );
};

export { Gallery, GalleryMobile };
