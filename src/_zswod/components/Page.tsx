import { Helmet } from 'react-helmet-async';
import { forwardRef, ReactNode } from 'react';
// material
import { Box, BoxProps } from '@mui/material';

// ----------------------------------------------------------------------

interface PageProps extends BoxProps {
  children: ReactNode;
  title?: string;
}

const Page = forwardRef<HTMLDivElement, PageProps>(({ children, title = '', ...other }, ref) => (
  <Box ref={ref} {...other}>
    <Helmet>
      <title>{title} | SP Orłów Drewniany</title>
    </Helmet>
    {children}
  </Box>
));

export { Page };
