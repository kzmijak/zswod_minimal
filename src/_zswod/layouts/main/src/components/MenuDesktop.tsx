import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Stack, MenuItem, useTheme } from '@mui/material';
import { MenuSection } from './controls/MenuSection';
import { menuContents, PATH_VULCAN } from 'src/_zswod/routes/src/menu.paths';
import { ButtonEPanel } from 'src/_zswod/components/ButtonEPanel';

type MenuDesktopProps = {
  isOffset?: boolean;
};
const MenuDesktop: FC<MenuDesktopProps> = ({ isOffset }) => {
  const [main, ...contents] = menuContents;
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';

  const buttonVariant = isOffset && isLight ? 'dark' : 'light';

  return (
    <Stack direction="row" spacing={2} alignItems="center">
      {main.children?.map(({ label, link }) => (
        <MenuSection variant={buttonVariant} key={label} label={label} href={link} />
      ))}
      {contents.map(({ label, link, children }) => (
        <MenuSection label={label} key={label} variant={buttonVariant} href={link}>
          {children?.map((child) => {
            const { label, link } = child!;
            return (
              <MenuItem key={label} component={Link} to={link!} sx={{ whiteSpace: 'normal' }}>
                {label}
              </MenuItem>
            );
          })}
        </MenuSection>
      ))}
      <MenuSection variant={buttonVariant} label="Dziennik Vulcan" href={PATH_VULCAN} />
      <ButtonEPanel />
    </Stack>
  );
};

export { MenuDesktop };
