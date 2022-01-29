import { Stack } from '@mui/material';
import { m } from 'framer-motion';
import { FC, useState } from 'react';
import { MotionContainer } from 'src/components/animate';
import { Page } from 'src/_zswod/components';
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
  const [openedGallery, setOpenedGallery] = useState<number | null>(null);

  return (
    <MotionContainer>
      <Page>
        <Stack direction="row">
          <m.div
            variants={pickerVariants}
            animate={openedGallery !== null ? 'openGallery' : 'closeGallery'}
          >
            <Picker openedGallery={openedGallery} setOpenedGallery={setOpenedGallery} />
          </m.div>
          <m.div
            variants={presenterVariants}
            animate={openedGallery !== null ? 'openGallery' : 'closeGallery'}
          >
            {openedGallery && <Presenter articleId={openedGallery} />}
          </m.div>
        </Stack>
      </Page>
    </MotionContainer>
  );
};

export { Gallery };
