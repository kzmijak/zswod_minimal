import { Stack, Typography } from '@mui/material';
import { FC } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

type CustomPageTopBarProps = {
  section: string;
  title: string;
};

const CustomPageTopBar: FC<CustomPageTopBarProps> = ({ section, title }) => (
  <Stack spacing={1} direction="row" alignItems="center">
    <Typography variant="h6" color="grey.700">
      {section}
    </Typography>
    <ArrowForwardIosIcon sx={{ color: 'grey.500' }} />
    <Typography variant="h3">{title}</Typography>
  </Stack>
);

export { CustomPageTopBar };
