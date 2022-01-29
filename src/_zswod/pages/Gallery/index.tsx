import { Grid } from '@mui/material';
import { FC, useState } from 'react';
import { Page } from 'src/_zswod/components';
import { Picker } from './Picker/Picker';
import { Presenter } from './Presenter/Presenter';

const Gallery: FC = () => {
  const [openedGallery, setOpenedGallery] = useState<number | null>(null);

  return (
    <Page>
      <Grid container spacing={0}>
        <Grid item xs={4}>
          <Picker openedGallery={openedGallery} setOpenedGallery={setOpenedGallery} />
        </Grid>
        {openedGallery && (
          <Grid item xs={8}>
            <Presenter articleId={openedGallery} />
          </Grid>
        )}
      </Grid>
    </Page>
  );
};

export { Gallery };
