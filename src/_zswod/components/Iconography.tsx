import { FC } from 'react';
import { Icon, getIcon } from '../models/enums/Icon';
import { Box, BoxProps, styled } from '@mui/material';

const IconContainerBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 30,
  height: 30,
}));

type IconographyProps = Pick<BoxProps, 'sx'> & {
  id: Icon;
};

const Iconography: FC<IconographyProps> = ({ id, sx }) => (
  <IconContainerBox sx={sx}>{getIcon(id)}</IconContainerBox>
);

export { Iconography };
