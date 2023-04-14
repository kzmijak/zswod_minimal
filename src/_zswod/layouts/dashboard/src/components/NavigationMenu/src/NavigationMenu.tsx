import { Box, Stack } from '@mui/material';
import { m, Variants } from 'framer-motion';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { selectCustomPageHeadersGrouped } from 'src/_zswod/modules/CustomPageHeaders';
import { PATH_DASHBOARD } from 'src/_zswod/routes';
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
        <NavigationItem icon="News" title="Nowości" url={PATH_DASHBOARD.articles} />
        <NavigationItem icon="Gallery" title="Galerie" url={PATH_DASHBOARD.galleries} />
      </Stack>
      {menuContents.map(({ items, section }) => (
        <Stack component={m.div} variants={container} key={section} spacing={1}>
          <NavigationSection sectionName={section} />
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
