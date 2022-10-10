import { Box, styled, Typography } from '@mui/material';
import { FC, ReactNode } from 'react';
import { useDropzone } from 'react-dropzone';
import { DropButton } from './controls/DropButton';
import { ImagePreview } from './ImagesPreview';

const DropZoneStyle = styled('div', {
  shouldForwardProp: (propName) => propName !== 'isDragActive' && propName !== 'error',
})<{ isDragActive: boolean; error: boolean }>(({ theme, isDragActive, error }) => ({
  outline: 'none',
  padding: theme.spacing(5, 1),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.neutral,
  border: `1px dashed ${theme.palette.grey[500_32]}`,
  '&:hover': { opacity: 0.72, cursor: 'pointer' },
  ...(isDragActive && { opacity: 0.72 }),
  ...(error && {
    color: 'error.main',
    borderColor: 'error.light',
    bgcolor: 'error.lighter',
  }),
}));

type ImageDropProps = {
  images: (File | string)[];
  error?: boolean;
  helperText?: ReactNode;
  onDrop: (image: File | File[]) => void;
  onRemove?: (index: number) => void;
};

const ImageDrop: FC<ImageDropProps> = ({ error, images, onDrop, onRemove, helperText }) => {
  const { getRootProps, getInputProps, isDragActive, isDragReject } = useDropzone({
    multiple: true,
    onDrop: (image: File | File[]) => {
      onDrop(image);
    },
  });

  return (
    <Box sx={{ width: '100%' }}>
      <DropZoneStyle
        {...getRootProps()}
        error={Boolean(isDragReject || error)}
        isDragActive={isDragActive}
      >
        <input {...getInputProps()} />
        <DropButton />
      </DropZoneStyle>

      <Typography>{helperText}</Typography>

      {images.length > 0 && <ImagePreview images={images} onRemove={onRemove} />}
    </Box>
  );
};

export { ImageDrop };
