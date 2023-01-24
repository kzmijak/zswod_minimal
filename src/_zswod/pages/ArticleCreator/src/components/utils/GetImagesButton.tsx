import { Stack, Typography, styled, Box } from '@mui/material';
import { FC, ReactNode } from 'react';

const DropZoneStyle = styled(Box, {
  shouldForwardProp: (propName) => propName !== 'isDragActive' && propName !== 'error',
})<{ dimmed: boolean; error: boolean }>(({ theme, dimmed, error }) => ({
  margin: 15,
  border: `dashed 4px ${theme.palette.primary.light}`,
  borderRadius: 10,
  '&:hover': { opacity: 0.92, cursor: 'pointer' },
  ...(dimmed && { opacity: 0.6 }),
  ...(error && {
    color: 'error.main',
    borderColor: 'error.light',
    bgcolor: 'error.lighter',
  }),
}));

type GetImagesButtonProps = {
  error?: boolean;
  onClick?: () => void;
  illustration: ReactNode;
  subtitle?: string;
  dimmed?: boolean;
};

const GetImagesButton: FC<GetImagesButtonProps> = ({
  illustration,
  error,
  onClick,
  subtitle,
  dimmed,
}) => (
  <DropZoneStyle error={Boolean(error)} dimmed={Boolean(dimmed)}>
    <Stack onClick={onClick} minHeight={1} justifyContent="center" alignItems="center" padding={2}>
      {illustration}
      <Typography align="center" variant="h6" color={(theme) => theme.palette.primary.dark}>
        {subtitle}
      </Typography>
    </Stack>
  </DropZoneStyle>
);

export { GetImagesButton };
