import { Card, CardActionArea, Stack, Typography } from '@mui/material';
import { FC, ReactNode } from 'react';

type IllustrationCardProps = {
  label: string;
  illustration: ReactNode;
  onClick?: () => void;
  selected?: boolean;
};
const IllustrationCard: FC<IllustrationCardProps> = ({
  illustration,
  label,
  onClick,
  selected,
}) => (
  <Card
    sx={(theme) => ({
      width: 150,
      ...(selected && { boxShadow: `0px 0px 0px 2px ${theme.palette.primary.main} inset` }),
    })}
  >
    <CardActionArea onClick={onClick}>
      <Stack alignItems="center" pb={5}>
        <Stack width={130} height={130} justifyContent="center" alignItems="center">
          {illustration}
        </Stack>
        <Typography align="center" variant="h5">
          {label}
        </Typography>
      </Stack>
    </CardActionArea>
  </Card>
);

export { IllustrationCard };
