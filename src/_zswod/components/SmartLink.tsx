import { forwardRef, ReactNode } from 'react';
import { Link as ExternalLink } from '@mui/material';
import { isExternal } from '../utils/isExternal';
import { SxProps } from '@mui/material/styles';
import { RouterLink } from './RouterLink';

type SmartLinkProps = {
  to: string;
  replace?: boolean;
  children?: ReactNode;
  sx?: SxProps;
};

const SmartLink = forwardRef<HTMLAnchorElement, SmartLinkProps>(
  ({ to, replace, children, sx }, ref) => {
    const isLinkExternal = isExternal(to);

    return isLinkExternal ? (
      <ExternalLink underline="none" color="inherit" ref={ref} href={to} sx={sx}>
        {children}
      </ExternalLink>
    ) : (
      <RouterLink ref={ref} to={to} color="inherit" replace={replace} sx={sx}>
        {children}
      </RouterLink>
    );
  }
);

export { SmartLink };
