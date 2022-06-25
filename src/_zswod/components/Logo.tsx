import { Link as RouterLink } from 'react-router-dom';
import { Box, BoxProps } from '@mui/material';
import { FC } from 'react';

// ----------------------------------------------------------------------

type LogoProps = {
  disabledLink?: boolean;
} & BoxProps;

const Logo: FC<LogoProps> = ({ disabledLink = false, ...props }) => {
  const logo = <Box {...props} component="img" src="/logo/logo_centered.png" />;

  if (disabledLink) {
    return <>{logo}</>;
  }

  return <RouterLink to="/">{logo}</RouterLink>;
};

export { Logo };
