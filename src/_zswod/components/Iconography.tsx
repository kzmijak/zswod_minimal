import { FC } from 'react';
import { Icon, getIcon } from '../models/enums/Icon';
import { Box, BoxProps } from '@mui/material';

type IconographyProps = Pick<BoxProps, 'sx'> & {
  id: Icon;
};

const Iconography: FC<IconographyProps> = ({ id, sx }) => <Box sx={sx}>{getIcon(id)}</Box>;

export { Iconography };
