import { ReactNode } from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Link, Stack, LinkProps } from '@mui/material';
// components//
import { MenuProps, MenuItemProps } from 'src/layouts/main/type';
import { PopoverElement } from './PopoverElement';

// ----------------------------------------------------------------------

export interface RouterLinkProps extends LinkProps {
  component?: ReactNode;
  to?: string;
  end?: boolean;
}

export const LinkStyle = styled(Link)<RouterLinkProps>(({ theme }) => ({
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

// ----------------------------------------------------------------------

export default function MenuDesktop({ isOffset, isHome, navConfig }: MenuProps) {
  return (
    <Stack direction="row">
      {navConfig.map((link) => (
        <MenuDesktopItem key={link.title} item={link} isOffset={isOffset} isHome={isHome} />
      ))}
    </Stack>
  );
}

// ----------------------------------------------------------------------

type MenuDesktopItemProps = {
  item: MenuItemProps;
  isHome: boolean;
  isOffset: boolean;
};

function MenuDesktopItem({ isHome, isOffset, item }: MenuDesktopItemProps) {
  const { title, path, children } = item;

  if (children) {
    return <PopoverElement title={title} isHome={isHome} isOffset={isOffset} children={children} />;
  }

  if (title === 'Dziennik Vulcan') {
    return (
      <LinkStyle
        href={path}
        target="_blank"
        rel="noopener"
        sx={{
          ...(isHome && { color: 'common.white' }),
          ...(isOffset && { color: 'text.primary' }),
        }}
      >
        {title}
      </LinkStyle>
    );
  }

  return (
    <LinkStyle
      to={path}
      component={RouterLink}
      end={path === '/'}
      sx={{
        ...(isHome && { color: 'common.white' }),
        ...(isOffset && { color: 'text.primary' }),
        '&.active': {
          color: 'primary.main',
        },
      }}
    >
      {title}
    </LinkStyle>
  );
}
