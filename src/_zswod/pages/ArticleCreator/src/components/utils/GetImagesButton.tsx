import { Stack, Typography, styled, Box } from '@mui/material';
import { FC, ReactNode } from 'react';

const DropZoneStyle = styled(Box, {
  shouldForwardProp: (propName) => propName !== 'isDragActive' && propName !== 'error',
})<{ dimmed: boolean; error: boolean }>(({ theme, dimmed, error }) => ({
  margin: 15,
  border: `dashed 2px ${theme.palette.divider}`,
  backgroundColor: theme.palette.grey[200],
  borderRadius: 10,
  '&:hover': { cursor: 'pointer', backgroundColor: theme.palette.grey[300] },
  ...(dimmed && { opacity: 0.6 }),
  ...(error && {
    color: 'error.main',
    borderColor: 'error.light',
    bgcolor: 'error.lighter',
  }),
  transition: 'all 0.2s',
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
      <Typography align="center" variant="h6" color={(theme) => theme.palette.text.primary}>
        {subtitle}
      </Typography>
    </Stack>
  </DropZoneStyle>
);

export { GetImagesButton };
