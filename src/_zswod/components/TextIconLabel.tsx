// @mui
import { Stack, StackProps, SxProps } from '@mui/material';
import { FC, ReactElement, ReactNode } from 'react';

interface TextIconLabelProps extends StackProps {
  icon: ReactElement;
  value: ReactNode;
  endIcon?: boolean;
  sx?: SxProps;
}

const TextIconLabel: FC<TextIconLabelProps> = ({ icon, value, endIcon = false, sx, ...other }) => (
  <Stack
    direction="row"
    alignItems="center"
    sx={{
      typography: 'body2',
      ...sx,
    }}
    {...other}
  >
    {!endIcon && icon}

    {value}

    {endIcon && icon}
  </Stack>
);

export { TextIconLabel };
