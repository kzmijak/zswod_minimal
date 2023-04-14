import { FC } from 'react';
import { Stack, Typography } from '@mui/material';
import { RequireRole } from 'src/_zswod/modules/User';
import { isLight } from 'src/_zswod/utils/paletteMode';
import { CreateSectionItemButton } from './CreateSectionItemButton';

type NavigationSectionProps = {
  sectionName: string;
};

type SectionTitleProps = Pick<NavigationSectionProps, 'sectionName'>;
const SectionTitle: FC<SectionTitleProps> = ({ sectionName }) => (
  <Typography
    variant="overline"
    color={(theme) => (isLight(theme) ? theme.palette.grey[600] : theme.palette.grey.A200)}
  >
    {sectionName}
  </Typography>
);

const NavigationSection: FC<NavigationSectionProps> = ({ sectionName }) => (
  <Stack direction="row" justifyContent="space-between" alignItems="center">
    <SectionTitle sectionName={sectionName} />
    <RequireRole role="Teacher">
      <CreateSectionItemButton sectionName={sectionName} />
    </RequireRole>
  </Stack>
);

export { NavigationSection };
