import { Button } from '@mui/material';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import Iconify from 'src/components/Iconify';
import { PATH_DASHBOARD_ROOT } from '../routes';

type ButtonEPanelProps = {
  width?: number;
  height?: number;
};

const ButtonEPanel: FC<ButtonEPanelProps> = ({ width = 20, height = 20 }) => (
  <Button
    size="large"
    variant="contained"
    component={Link}
    to={PATH_DASHBOARD_ROOT}
    startIcon={<Iconify icon={'eva:flash-fill'} width={width} height={height} />}
  >
    e-Panel
  </Button>
);

export { ButtonEPanel };
