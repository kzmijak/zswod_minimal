import { forwardRef, ReactNode } from 'react';
import { Link as ExternalLink, styled } from '@mui/material';
import { Link as InternalLink } from 'react-router-dom';
import { isExternal } from '../utils/isExternal';
import { SxProps } from '@mui/material/styles';

const InternalLinkStyled = styled(InternalLink)({
  textDecoration: 'none',
  color: 'inherit',
});

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
      <InternalLinkStyled ref={ref} to={to} color="inherit" replace={replace} sx={sx}>
        {children}
      </InternalLinkStyled>
    );
  }
);

export { SmartLink };
