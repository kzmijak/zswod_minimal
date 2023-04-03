import { Button } from '@mui/material';
import { FC } from 'react';
import { Toolbar } from 'src/_zswod/components/Toolbar';
import AddIcon from '@mui/icons-material/Add';

const GalleryToolbar: FC = () => (
  <Toolbar>
    <Button startIcon={<AddIcon />} variant="outlined" color="inherit">
      Utwórz
    </Button>
  </Toolbar>
);

export { GalleryToolbar };
