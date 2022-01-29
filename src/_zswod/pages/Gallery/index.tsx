import { Stack } from '@mui/material';
import { m } from 'framer-motion';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { MotionContainer } from 'src/components/animate';
import { Page } from 'src/_zswod/components';
import { getCurrentGallery } from 'src/_zswod/redux/gallery/selectors';
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
  console.log(gallery);

  return (
    <MotionContainer>
      <Page>
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
