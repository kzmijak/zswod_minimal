import { Container, Stack, Typography } from '@mui/material';
import { FC } from 'react';
import Scrollbar from 'src/components/Scrollbar';
import { Page } from 'src/_old_zswod/components';
import { galleryGreeter, useGreeter } from 'src/_old_zswod/utils/Greeters/useGreeter';
import { GalleryMobile } from './Mobile/mobile';
import { Picker } from './Picker/Picker';
import { SimplePresenter } from './Presenter/SimplePresenter';

const Gallery: FC = () => {
  const greeter = useGreeter(galleryGreeter);

  return (
    <Page sx={{ overflowX: 'hidden' }}>
      <Container>
        <Typography component="div" variant="overline" sx={{ color: 'text.disabled' }}>
          {greeter}
        </Typography>
        <Typography variant="h1" sx={{ mb: 5 }}>
          Galeria
        </Typography>
      </Container>
      <Scrollbar>
        <Stack direction="row">
          <Picker />
          <SimplePresenter />
        </Stack>
      </Scrollbar>
    </Page>
  );
};

export { Gallery, GalleryMobile };
