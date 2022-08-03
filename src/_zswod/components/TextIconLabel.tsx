import { FC } from 'react';
import { Stack, StackProps, SxProps } from '@mui/material';

type TextIconLabelProps = {
  icon: React.ReactElement;
  value: React.ReactNode;
  endIcon?: boolean;
  sx?: SxProps;
} & StackProps;

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
