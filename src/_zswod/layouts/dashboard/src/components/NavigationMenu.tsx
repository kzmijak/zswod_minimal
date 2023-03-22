import { alpha, Box, MenuItem, Stack, Typography } from '@mui/material';
import { m, Variants } from 'framer-motion';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { SmartLink } from 'src/_zswod/components/SmartLink';
import { CustomPageHeaderItem } from 'src/_zswod/models/CustomPageHeader';
import { getIcon } from 'src/_zswod/models/enums/Icon';
import { selectCustomPageHeadersGrouped } from 'src/_zswod/modules/CustomPageHeaders';
import { PATH_DASHBOARD } from 'src/_zswod/routes';
import { isLight } from 'src/_zswod/utils/paletteMode';

const container: Variants = {
  awaiting: { opacity: 0, x: -15 },
  appear: {
    opacity: 1,
    x: 0,
    transition: { staggerChildren: 0.05 },
  },
};

type NavItemProps = CustomPageHeaderItem;
const NavItem: FC<NavItemProps> = ({ icon, title, titleNormalized, link }) => {
  const { pathname } = useLocation();

  const isSelected = pathname.includes(titleNormalized);
  return (
    <SmartLink to={Boolean(link) ? link! : titleNormalized}>
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
            {getIcon(icon)}
          </Box>
          <Typography variant="subtitle2">{title}</Typography>
        </Stack>
      </MenuItem>
    </SmartLink>
  );
};

const NavigationMenu: FC = () => {
  const menuContents = useSelector(selectCustomPageHeadersGrouped);

  return (
    <Stack
      component={m.div}
      variants={container}
      initial="awaiting"
      animate="appear"
      padding={2}
      spacing={3}
      minHeight={800}
    >
      <Stack spacing={1}>
        <NavItem order={0} icon="News" title="Nowości" titleNormalized={PATH_DASHBOARD.articles} />
        <NavItem
          order={0}
          icon="Gallery"
          title="Galerie"
          titleNormalized={PATH_DASHBOARD.galleries}
        />
      </Stack>
      {menuContents.map(({ items, section }) => (
        <Stack component={m.div} variants={container} key={section} spacing={1}>
          <Typography
            variant="overline"
            color={(theme) => (isLight(theme) ? theme.palette.grey[600] : theme.palette.grey.A200)}
          >
            {section}
          </Typography>
          {items.map((props) => (
            <Box component={m.div} variants={container} key={props.title}>
              <NavItem {...props} />
            </Box>
          ))}
        </Stack>
      ))}
    </Stack>
  );
};

export { NavigationMenu };
