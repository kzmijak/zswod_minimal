import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { Stack } from '@mui/material';
import { MenuItemProps } from 'src/layouts/main/type';
import { PopoverElement } from './PopoverElement';
import { RouterLink } from './RouterLink';

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
      <RouterLink
        href={path}
        target="_blank"
        rel="noopener"
        sx={{
          ...(isHome && { color: 'common.white' }),
          ...(isOffset && { color: 'text.primary' }),
        }}
      >
        {title}
      </RouterLink>
    );
  }

  return (
    <RouterLink
      to={path}
      component={NavLink}
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
    </RouterLink>
  );
}

type MenuDesktopProps = {
  isOffset: boolean;
  isHome: boolean;
  navConfig: MenuItemProps[];
};

const MenuDesktop: FC<MenuDesktopProps> = ({ isOffset, isHome, navConfig }) => (
  <Stack direction="row">
    {navConfig.map((link) => (
      <MenuDesktopItem key={link.title} item={link} isOffset={isOffset} isHome={isHome} />
    ))}
  </Stack>
);

export { MenuDesktop };
