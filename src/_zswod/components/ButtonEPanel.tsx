import { Button } from '@mui/material';
import { FC } from 'react';
import { Link, To } from 'react-router-dom';
import { PATH_DASHBOARD_ROOT } from '../routes';
import BoltIcon from '@mui/icons-material/Bolt';

type ButtonEPanelProps = {
  to?: To;
  width?: number;
  height?: number;
};

const ButtonEPanel: FC<ButtonEPanelProps> = ({ to, width = 20, height = 20 }) => (
  <Button
    size="large"
    variant="contained"
    component={Link}
    to={to ?? PATH_DASHBOARD_ROOT}
    startIcon={<BoltIcon width={width} height={height} />}
  >
    e-Panel
  </Button>
);

export { ButtonEPanel };
