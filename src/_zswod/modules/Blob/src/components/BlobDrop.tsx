import { Box, Stack, styled, Typography } from '@mui/material';
import { FC } from 'react';
import { useDropzone } from 'react-dropzone';
import { UploadIllustration } from 'src/assets';
import { useAppDispatch } from 'src/_zswod/utils/useAppDispatch';
import { uploadBlobsAsyncThunk } from '../slice/thunks';

const DropZoneStyle = styled(Box, {
  shouldForwardProp: (propName) => propName !== 'dimmed' && propName !== 'error',
})<{ dimmed: boolean; error: boolean }>(({ theme, dimmed, error }) => ({
  margin: 15,
  border: `dashed 2.5px ${theme.palette.primary.light}`,
  borderRadius: 10,
  '&:hover': { opacity: 0.92, cursor: 'pointer' },
  ...(dimmed && { opacity: 0.6 }),
  ...(error && {
    color: 'error.main',
    borderColor: 'error.light',
    bgcolor: 'error.lighter',
  }),
}));

const BlobDrop: FC = () => {
  const dispatch = useAppDispatch();

  const handleDrop = async (files: File[]) => {
    dispatch(uploadBlobsAsyncThunk(files));
  };

  const { getRootProps, getInputProps, isDragActive, isDragReject } = useDropzone({
    multiple: true,
    onDrop: handleDrop,
  });

  return (
    <DropZoneStyle {...getRootProps()} dimmed={isDragActive} error={isDragReject}>
      <input {...getInputProps()} />
      <Stack direction="row" justifyContent="center">
        <UploadIllustration sx={{ height: 100 }} />
        <Stack justifyContent="center">
          <Typography variant="h5" color={(theme) => theme.palette.primary.main}>
            Wybierz obrazy z komputera
          </Typography>
          <Typography variant="caption" color={(theme) => theme.palette.grey[600]}>
            Wszystkie wgrane w ten sposób obrazy trafiają do serwera
          </Typography>
        </Stack>
      </Stack>
    </DropZoneStyle>
  );
};

export { BlobDrop };
