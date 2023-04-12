import { Box, IconButton, Stack, Tooltip, Typography } from '@mui/material';
import { m, Variants } from 'framer-motion';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { selectCustomPageHeadersGrouped } from 'src/_zswod/modules/CustomPageHeaders';
import { PATH_DASHBOARD } from 'src/_zswod/routes';
import { isLight } from 'src/_zswod/utils/paletteMode';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import { RequireRole } from 'src/_zswod/modules/User';
import { NavigationItem } from './NavigationItem';
import { NavigationSection } from './NavigationSection';

const container: Variants = {
  awaiting: { opacity: 0, x: -15 },
  appear: {
    opacity: 1,
    x: 0,
    transition: { staggerChildren: 0.05 },
  },
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
        <NavigationItem
          order={0}
          icon="News"
          title="Nowości"
          titleNormalized={PATH_DASHBOARD.articles}
        />
        <NavigationItem
          order={0}
          icon="Gallery"
          title="Galerie"
          titleNormalized={PATH_DASHBOARD.galleries}
        />
      </Stack>
      {menuContents.map(({ items, section }) => (
        <Stack component={m.div} variants={container} key={section} spacing={1}>
          <NavigationSection title={section} />
          {items.map((props) => (
            <Box component={m.div} variants={container} key={props.title}>
              <NavigationItem {...props} />
            </Box>
          ))}
        </Stack>
      ))}
    </Stack>
  );
};

export { NavigationMenu };
