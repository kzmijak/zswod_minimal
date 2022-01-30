import { Container, Stack, Typography } from '@mui/material';
import { m } from 'framer-motion';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { MotionContainer } from 'src/components/animate';
import { Page } from 'src/_zswod/components';
import { getCurrentGallery } from 'src/_zswod/redux/gallery/selectors';
import { galleryGreeter, useGreeter } from 'src/_zswod/utils/Greeters/useGreeter';
import { GalleryMobile } from './Mobile/mobile';
import { Picker } from './Picker/Picker';
import { Presenter } from './Presenter/Presenter';

const pickerVariants = {
  openGallery: { width: '40%', transition: { duration: 0.5 } },
  closeGallery: { width: '100%', transition: { duration: 0.5 } },
};

const presenterVariants = {
  openGallery: { width: '60%', transition: { duration: 0.5 } },
  closeGallery: { width: '0%', transition: { duration: 0.5 } },
};

const Gallery: FC = () => {
  const gallery = useSelector(getCurrentGallery);
  const greeter = useGreeter(galleryGreeter);

  return (
    <MotionContainer>
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
          <m.div variants={pickerVariants} animate={gallery ? 'openGallery' : 'closeGallery'}>
            <Picker />
          </m.div>
          <m.div
            variants={presenterVariants}
            animate={gallery !== null ? 'openGallery' : 'closeGallery'}
          >
            <Presenter />
          </m.div>
        </Stack>
      </Page>
    </MotionContainer>
  );
};

export { Gallery, GalleryMobile };
