import { alpha, Box, MenuItem, Stack, Typography } from '@mui/material';
import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { SmartLink } from 'src/_zswod/components/SmartLink';
import { menuContents } from 'src/_zswod/routes/src/menu.paths';
import { isLight } from 'src/_zswod/utils/paletteMode';

type NavigationMenuProps = {};

const NavigationMenu: FC<NavigationMenuProps> = () => {
  const { pathname } = useLocation();

  return (
    <Stack padding={2} spacing={3}>
      {menuContents.map(({ children, label }) => (
        <Stack key={label} spacing={1}>
          <Typography
            variant="overline"
            color={(theme) => (isLight(theme) ? theme.palette.grey[600] : theme.palette.grey.A200)}
          >
            {label}
          </Typography>
          {children!.map(({ key, label, link, icon }, index) => {
            const isSelected = pathname.includes(key!);
            return (
              <SmartLink key={index} to={link!}>
                <MenuItem
                  sx={(theme) => ({
                    whiteSpace: 'normal',
                    ...(isSelected && {
                      backgroundColor: alpha(theme.palette.primary.main, 0.15),
                      ':hover': { backgroundColor: alpha(theme.palette.primary.main, 0.3) },
                    }),
                    transition: 'all 0.2s',
                    borderRadius: 3,
                  })}
                >
                  <Stack direction="row" spacing={2} alignItems="center" minHeight={30}>
                    <Box
                      width={30}
                      height={30}
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: isSelected ? 'primary.dark' : 'grey.700',
                        bgcolor: 'background.default',
                        borderRadius: 3,
                      }}
                    >
                      {icon}
                    </Box>
                    <Typography variant="subtitle2">{label}</Typography>
                  </Stack>
                </MenuItem>
              </SmartLink>
            );
          })}
        </Stack>
      ))}
    </Stack>
  );
};

export { NavigationMenu };
