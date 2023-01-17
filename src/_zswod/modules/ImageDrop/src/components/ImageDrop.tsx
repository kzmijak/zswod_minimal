import { Stack, styled, Typography } from '@mui/material';
import { FC, ReactNode } from 'react';
import { useDropzone } from 'react-dropzone';

const DropZoneStyle = styled('div', {
  shouldForwardProp: (propName) => propName !== 'isDragActive' && propName !== 'error',
})<{ isDragActive: boolean; error: boolean }>(({ theme, isDragActive, error }) => ({
  margin: 15,
  border: `dashed 4px ${theme.palette.primary.light}`,
  borderRadius: 10,
  '&:hover': { opacity: 0.92, cursor: 'pointer' },
  ...(isDragActive && { opacity: 0.6 }),
  ...(error && {
    color: 'error.main',
    borderColor: 'error.light',
    bgcolor: 'error.lighter',
  }),
}));

type ImageDropProps = {
  error?: boolean;
  onDrop: (image: File | File[]) => void;
  onRemove?: (index: number) => void;
  illustration: ReactNode;
};

const ImageDrop: FC<ImageDropProps> = ({ error, onDrop, onRemove, illustration }) => {
  const { getRootProps, getInputProps, isDragActive, isDragReject } = useDropzone({
    multiple: true,
    onDrop,
  });

  return (
    <DropZoneStyle
      {...getRootProps()}
      error={Boolean(isDragReject || error)}
      isDragActive={isDragActive}
    >
      <input {...getInputProps()} />
      <Stack minHeight={1} justifyContent="center" alignItems="center">
        {illustration}
        <Typography variant="h6" color={(theme) => theme.palette.primary.dark}>
          Wybierz z dysku
        </Typography>
      </Stack>
    </DropZoneStyle>
  );
};

export { ImageDrop };
