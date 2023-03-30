import { Button } from '@mui/material';
import { FC } from 'react';
import { Toolbar } from 'src/_zswod/components/Toolbar';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';

const ArticleToolbar: FC = () => (
  <Toolbar>
    <Button
      component={Link}
      to="/edytor"
      startIcon={<AddIcon />}
      variant="outlined"
      color="inherit"
    >
      Utwórz
    </Button>
  </Toolbar>
);

export { ArticleToolbar };
