import { FC } from 'react';
import { Stack, Typography } from '@mui/material';
import { RequireRole } from 'src/_zswod/modules/User';
import { isLight } from 'src/_zswod/utils/paletteMode';
import { CreateSectionItemButton } from './CreateSectionItemButton';

type NavigationSectionProps = {
  title: string;
};

type SectionTitleProps = Pick<NavigationSectionProps, 'title'>;
const SectionTitle: FC<SectionTitleProps> = ({ title }) => (
  <Typography
    variant="overline"
    color={(theme) => (isLight(theme) ? theme.palette.grey[600] : theme.palette.grey.A200)}
  >
    {title}
  </Typography>
);

const NavigationSection: FC<NavigationSectionProps> = ({ title }) => (
  <Stack direction="row" justifyContent="space-between" alignItems="center">
    <SectionTitle title={title} />
    <RequireRole role="Teacher">
      <CreateSectionItemButton />
    </RequireRole>
  </Stack>
);

export { NavigationSection };
