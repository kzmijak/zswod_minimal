import { Typography, Stack } from '@mui/material';
import { FC } from 'react';
import { Link } from 'react-router-dom';

type LinkBaseProps = {
  header: string;
  callToAction: string;
  url: string;
};

const LinkBase: FC<LinkBaseProps> = ({ callToAction, header, url }) => (
  <Typography component={Stack} direction="row" alignItems="center">
    {header}&nbsp;
    <Typography component={Link} to={url} color="primary" sx={{ textDecoration: 'none' }}>
      {callToAction}
    </Typography>
  </Typography>
);

export { LinkBase };
