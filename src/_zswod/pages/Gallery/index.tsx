import { Stack } from '@mui/material';
import { FC } from 'react';
import { Page } from 'src/_zswod/components';
import { Picker } from './Picker/Picker';
import { Presenter } from './Presenter/Presenter';

const Gallery: FC = () => (
  <Page>
    <Stack direction="row">
      <Picker />
      <Presenter articleId={1} />
    </Stack>
  </Page>
);

export { Gallery };
