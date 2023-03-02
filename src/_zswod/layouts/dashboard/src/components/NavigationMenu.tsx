import { alpha, MenuItem, Stack, Typography } from '@mui/material';
import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { menuContents } from 'src/_zswod/routes/src/menu.paths';

type NavigationMenuProps = {};

const NavigationMenu: FC<NavigationMenuProps> = () => {
  const { pathname } = useLocation();

  return (
    <Stack padding={2} spacing={1}>
      {menuContents.map(({ children, label }) => (
        <>
          <Typography variant="h4" key={label}>
            {label}
          </Typography>
          {children!.map(({ key, label, link }) => {
            const isSelected = pathname.includes(key!);
            return (
              <MenuItem
                component={Link}
                key={key}
                to={link}
                sx={(theme) => ({
                  ...(isSelected && {
                    backgroundColor: alpha(theme.palette.primary.main, 0.15),
                    ':hover': { backgroundColor: alpha(theme.palette.primary.main, 0.3) },
                  }),
                  transition: 'all 0.2s',
                })}
              >
                {label}
              </MenuItem>
            );
          })}
        </>
      ))}
    </Stack>
  );
};

export { NavigationMenu };
