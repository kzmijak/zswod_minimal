import { Box, List, ListItem, ListSubheader, Popover, styled } from '@mui/material';
import { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Iconify from 'src/components/Iconify';
import { MenuItemChildrenProps } from 'src/layouts/main/type';
import { LinkStyle, RouterLinkProps } from './MenuDesktop';

export type IconBulletProps = {
  type?: 'subheader' | 'item';
};

function IconBullet({ type = 'item' }: IconBulletProps) {
  return (
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
}

const ListItemStyle = styled(ListItem)<RouterLinkProps>(({ theme }) => ({
  ...theme.typography.body2,
  padding: 0,
  marginTop: theme.spacing(3),
  color: theme.palette.text.secondary,
  transition: theme.transitions.create('color'),
  '&:hover': {
    color: theme.palette.text.primary,
  },
}));

type PopoverElementProps = {
  title: string;
  isHome: boolean;
  isOffset: boolean;
  children: MenuItemChildrenProps[];
};

const PopoverElement: FC<PopoverElementProps> = ({ title, isHome, isOffset, children }) => {
  const [anchorEl, setAnchorEl] = useState<HTMLAnchorElement | null>(null);
  const open = Boolean(anchorEl);

  const headerClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <LinkStyle
        onClick={headerClick}
        sx={{
          display: 'flex',
          cursor: 'pointer',
          alignItems: 'center',
          ...(isHome && { color: 'common.white' }),
          ...(isOffset && { color: 'text.primary' }),
          ...(open && { opacity: 0.48 }),
        }}
      >
        {title}
        <Iconify
          icon={open ? 'eva:arrow-ios-upward-fill' : 'eva:arrow-ios-downward-fill'}
          sx={{ ml: 0.5, width: 16, height: 16 }}
        />
      </LinkStyle>

      <Popover
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
        onClose={handleClose}
        PaperProps={{
          sx: {
            px: 3,
            pt: 3,
            pb: 3,
            m: 'auto',
            borderRadius: 2,
            alignItems: 'center',
            maxWidth: (theme) => theme.breakpoints.values.lg,
            boxShadow: (theme) => theme.customShadows.z24,
          },
        }}
      >
        <>
          {children.map((list) => {
            const { subheader, items } = list;

            return (
              <List key={subheader} disablePadding>
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
                  <IconBullet type="subheader" /> {subheader}
                </ListSubheader>
                {items.map((item) => (
                  <ListItemStyle
                    key={item.title}
                    to={item.path}
                    component={NavLink}
                    underline="none"
                    sx={{
                      '&.active': {
                        color: 'text.primary',
                        typography: 'subtitle2',
                      },
                    }}
                  >
                    <IconBullet />
                    {item.title}
                  </ListItemStyle>
                ))}
              </List>
            );
          })}
        </>
      </Popover>
    </>
  );
};

export { PopoverElement };
