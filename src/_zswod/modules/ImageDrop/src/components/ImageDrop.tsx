import { Box, Button, Stack, styled, SxProps, Theme } from '@mui/material';
import { FC, ReactNode } from 'react';
import { DropzoneOptions, useDropzone } from 'react-dropzone';
import { DropButton } from './controls/DropButton';
import { RejectionFiles } from './controls/RejectionFiles';
import { ImagePreview } from './ImagesPreview';

const DropZoneStyle = styled('div')(({ theme }) => ({
  outline: 'none',
  padding: theme.spacing(5, 1),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.neutral,
  border: `1px dashed ${theme.palette.grey[500_32]}`,
  '&:hover': { opacity: 0.72, cursor: 'pointer' },
}));

type ImageDropProps = DropzoneOptions & {
  images: File[];
  error?: boolean;
  showPreview?: boolean;
  sx?: SxProps<Theme>;
  helperText?: ReactNode;
  onUpload?: VoidFunction;
  onRemove?: (file: File) => void;
  onRemoveAll?: VoidFunction;
};

const ImageDrop: FC<ImageDropProps> = ({
  error,
  showPreview = false,
  images,
  onUpload,
  onRemove,
  onRemoveAll,
  helperText,
  sx,
  ...dropzoneProps
}) => {
  const { getRootProps, getInputProps, isDragActive, isDragReject, fileRejections } = useDropzone({
    ...dropzoneProps,
  });

  return (
    <Box sx={{ width: '100%', ...sx }}>
      <DropZoneStyle
        {...getRootProps()}
        sx={{
          ...(isDragActive && { opacity: 0.72 }),
          ...((isDragReject || error) && {
            color: 'error.main',
            borderColor: 'error.light',
            bgcolor: 'error.lighter',
          }),
        }}
      >
        <input {...getInputProps()} />

        <DropButton />
      </DropZoneStyle>

      {fileRejections.length > 0 && <RejectionFiles fileRejections={fileRejections} />}

      <ImagePreview images={images} showPreview={showPreview} onRemove={onRemove} />

      {images.length > 0 && (
        <Stack direction="row" justifyContent="flex-end" spacing={1.5}>
          <Button color="inherit" size="small" onClick={onRemoveAll}>
            Remove all
          </Button>
          <Button size="small" variant="contained" onClick={onUpload}>
            Upload files
          </Button>
        </Stack>
      )}

      {helperText}
    </Box>
  );
};

export { ImageDrop };
