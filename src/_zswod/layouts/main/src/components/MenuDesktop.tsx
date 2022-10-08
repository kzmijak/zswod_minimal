import { useState, useEffect, FC, useRef } from 'react';
import { NavLink as RouterLink, useLocation, NavLinkProps } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Link, List, Stack, Popover, ListItem, LinkProps, ListSubheader } from '@mui/material';
import Iconify from 'src/components/Iconify';
import { MenuProps, MenuItemProps } from './type';

interface LinkStyleProps extends LinkProps {
  component?: React.ForwardRefExoticComponent<
    NavLinkProps & React.RefAttributes<HTMLAnchorElement>
  >;
  to?: string;
  end?: boolean;
}

const LinkStyle = styled(Link)<LinkStyleProps>(({ theme }) => ({
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

const SubLinkStyle = styled((props: LinkProps) => (
  <ListItem sx={{ p: 0 }}>
    <Link target="_blank" rel="noopener" {...props}>
      {props.children}
    </Link>
  </ListItem>
))(({ theme }) => ({
  ...theme.typography.body2,
  display: 'flex',
  alignItems: 'center',
  marginTop: theme.spacing(3),
  color: theme.palette.text.secondary,
  transition: theme.transitions.create('color'),
  '&:hover': {
    color: theme.palette.text.primary,
  },
}));

// ----------------------------------------------------------------------

const MenuDesktop: FC<MenuProps> = ({ isOffset, isHome, navConfig }) => {
  const { pathname } = useLocation();

  const [open, setOpen] = useState(-1);

  useEffect(() => {
    if (open) {
      handleClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const handleOpen = (index: number) => {
    setOpen(index);
  };

  const handleClose = () => {
    setOpen(-1);
  };

  return (
    <Stack direction="row">
      {navConfig.map((link, index) => (
        <MenuDesktopItem
          key={link.title}
          item={link}
          isOpen={open === index}
          onOpen={() => handleOpen(index)}
          onClose={handleClose}
          isOffset={isOffset}
          isHome={isHome}
        />
      ))}
    </Stack>
  );
};

type MenuDesktopItemProps = {
  item: MenuItemProps;
  isOpen: boolean;
  isHome: boolean;
  isOffset: boolean;
  onOpen: VoidFunction;
  onClose: VoidFunction;
};

const MenuDesktopItem: FC<MenuDesktopItemProps> = ({
  item,
  isHome,
  isOpen,
  isOffset,
  onOpen,
  onClose,
}) => {
  const { pathname } = useLocation();
  const headerEl = useRef<HTMLAnchorElement | null>(null);

  const { title, path, items } = item;

  const isActive = (currentPath: string) => pathname === currentPath;

  if (Boolean(items)) {
    return (
      <>
        <LinkStyle
          onClick={onOpen}
          ref={headerEl}
          sx={{
            display: 'flex',
            cursor: 'pointer',
            alignItems: 'center',
            ...(isHome && { color: 'common.white' }),
            ...(isOffset && { color: 'text.primary' }),
            ...(isOpen && { opacity: 0.48 }),
          }}
        >
          {title}
          <Iconify
            icon={isOpen ? 'eva:arrow-ios-upward-fill' : 'eva:arrow-ios-downward-fill'}
            sx={{ ml: 0.5, width: 16, height: 16 }}
          />
        </LinkStyle>

        <Popover
          open={isOpen}
          anchorEl={headerEl.current}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          transformOrigin={{ vertical: 'top', horizontal: 'center' }}
          onClose={onClose}
          PaperProps={{
            sx: {
              mt: 2,
              px: 3,
              pt: 5,
              pb: 3,
              boxShadow: (theme) => theme.customShadows.z24,
            },
          }}
        >
          <List component={Stack} disablePadding>
            <ListSubheader
              disableSticky
              disableGutters
              sx={{
                display: 'flex',
                lineHeight: 'unset',
                alignItems: 'center',
                color: 'text.primary',
                typography: 'overline',
              }}
            >
              <IconBullet type="subheader" /> {title}
            </ListSubheader>

            {items!.map(({ title, path }) => (
              <SubLinkStyle
                key={title}
                href={path}
                sx={{
                  ...(isActive(path) && {
                    color: 'text.primary',
                    typography: 'subtitle2',
                  }),
                }}
              >
                <IconBullet />
                {title}
              </SubLinkStyle>
            ))}
          </List>
        </Popover>
      </>
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
};

type IconBulletProps = {
  type?: 'subheader' | 'item';
};

const IconBullet: FC<IconBulletProps> = ({ type = 'item' }) => (
  <Box sx={{ width: 24, height: 16, display: 'flex', alignItems: 'center' }}>
    <Box
      component="span"
      sx={{
        ml: '2px',
        width: 4,
        height: 4,
        borderRadius: '50%',
        bgcolor: 'currentColor',
        ...(type !== 'item' && { ml: 0, width: 8, height: 2, borderRadius: 2 }),
      }}
    />
  </Box>
);

export { MenuDesktop };
export type { IconBulletProps };
