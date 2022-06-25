import { Link, LinkProps, styled } from '@mui/material';
import { ReactNode } from 'react';

type RouterLinkProps = {
  component?: ReactNode;
  to?: string;
  end?: boolean;
} & LinkProps;

const RouterLink = styled(Link)<RouterLinkProps>(({ theme }) => ({
  ...theme.typography.subtitle2,
  color: theme.palette.text.primary,
  marginRight: theme.spacing(5),
  transition: theme.transitions.create('opacity', {
    duration: theme.transitions.duration.shorter,
  }),
  '&:hover': {
    opacity: 0.48,
    textDecoration: 'none',
  },
}));

export { RouterLink };
export type { RouterLinkProps };
