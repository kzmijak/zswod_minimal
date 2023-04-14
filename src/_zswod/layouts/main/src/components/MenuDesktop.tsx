import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Stack, MenuItem, useTheme } from '@mui/material';
import { MenuSection } from './controls/MenuSection';
import { PATH_DASHBOARD, PATH_VULCAN } from 'src/_zswod/routes/src/paths';
import { ButtonEPanel } from 'src/_zswod/components/ButtonEPanel';
import { useSelector } from 'react-redux';
import { selectCustomPageHeadersGrouped } from 'src/_zswod/modules/CustomPageHeaders';

type MenuDesktopProps = {
  isOffset?: boolean;
};
const MenuDesktop: FC<MenuDesktopProps> = ({ isOffset }) => {
  const menuContents = useSelector(selectCustomPageHeadersGrouped);

  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';

  const buttonVariant = isOffset && isLight ? 'dark' : 'light';

  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <MenuSection variant={buttonVariant} label="Nowości" href={PATH_DASHBOARD.articles} />
      <MenuSection variant={buttonVariant} label="Galerie" href={PATH_DASHBOARD.galleries} />
      {menuContents.map(({ items, section }) => (
        <MenuSection label={section} key={section} variant={buttonVariant}>
          {items?.map(({ title, url, link }) => (
            <MenuItem
              key={title}
              component={Link}
              to={Boolean(link) ? link! : `/etablica/${url}`}
              sx={{ whiteSpace: 'normal' }}
            >
              {title}
            </MenuItem>
          ))}
        </MenuSection>
      ))}
      <MenuSection variant={buttonVariant} label="Dziennik Vulcan" href={PATH_VULCAN} />
      <ButtonEPanel />
    </Stack>
  );
};

export { MenuDesktop };
