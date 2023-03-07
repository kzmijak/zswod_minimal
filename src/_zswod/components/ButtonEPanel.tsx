import { Button, ButtonProps } from '@mui/material';
import { FC } from 'react';
import { Link, To } from 'react-router-dom';
import { PATH_DASHBOARD_ROOT } from '../routes';
import BoltIcon from '@mui/icons-material/Bolt';

type ButtonEPanelProps = Pick<ButtonProps, 'sx' | 'size'> & {
  to?: To;
};

const ButtonEPanel: FC<ButtonEPanelProps> = ({ to, size = 'large', ...rest }) => (
  <Button
    {...rest}
    size={size}
    variant="contained"
    component={Link}
    to={to ?? PATH_DASHBOARD_ROOT}
    startIcon={<BoltIcon width={20} height={20} />}
  >
    e-Panel
  </Button>
);

export { ButtonEPanel };
