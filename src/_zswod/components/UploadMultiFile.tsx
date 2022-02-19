import { isString } from 'lodash';
import { useDropzone, DropzoneOptions } from 'react-dropzone';
import CloseFill from '@mui/icons-material/Cancel';
import { m, AnimatePresence } from 'framer-motion';
// material
import { alpha, Theme, styled } from '@mui/material/styles';
import { Box, List, Paper, Button, ListItem, Typography } from '@mui/material';
import { SxProps } from '@mui/system';
// utils
//
import { varFade } from 'src/components/animate';
import { UploadIllustration } from '../../assets';

// ----------------------------------------------------------------------

const DropZoneStyle = styled('div')(({ theme }) => ({
  outline: 'none',
  display: 'flex',
  textAlign: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(5, 1),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.neutral,
  border: `1px dashed ${theme.palette.grey[500_32]}`,
  '&:hover': { opacity: 0.72, cursor: 'pointer' },
  [theme.breakpoints.up('md')]: { textAlign: 'left', flexDirection: 'row' },
}));

// ----------------------------------------------------------------------

interface CustomFile extends File {
  path?: string;
  preview?: string;
}

interface UploadMultiFileProps extends DropzoneOptions {
  error?: boolean;
  files: (File | string)[];
  onRemove: (file: File | string) => void;
  sx?: SxProps<Theme>;
}

const getFileData = (file: CustomFile | string) => {
  if (typeof file === 'string') {
    return {
      key: file,
    };
  }
  return {
    key: file.name,
    name: file.name,
    size: file.size,
    preview: file.preview,
  };
};
export default function UploadMultiFile({
  error,
  files,
  onRemove,
  sx,
  ...other
}: UploadMultiFileProps) {
  const hasFile = files?.length > 0;

  const { getRootProps, getInputProps, isDragActive, isDragReject } = useDropzone({
    ...other,
    accept: 'image/*',
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
        <UploadIllustration sx={{ width: 220 }} />
        <Box sx={{ p: 3, ml: { md: 2 } }}>
          <Typography gutterBottom variant="h5">
            Przerzuć lub Wybierz plik
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Przerzuć tutaj plik lub &nbsp;
            <Typography
              variant="body2"
              component="span"
              sx={{ color: 'primary.main', textDecoration: 'underline' }}
            >
              kliknij
            </Typography>
            &nbsp; i wybierz z dysku
          </Typography>
        </Box>
      </DropZoneStyle>

      <List disablePadding sx={{ ...(hasFile && { my: 3 }) }}>
        <AnimatePresence>
          {files.map((file, index) => {
            const { preview } = getFileData(file as CustomFile);

            return (
              <ListItem
                key={index}
                component={m.div}
                {...varFade().inRight}
                sx={{
                  p: 0,
                  m: 0.5,
                  width: 80,
                  height: 80,
                  borderRadius: 1.5,
                  overflow: 'hidden',
                  position: 'relative',
                  display: 'inline-flex',
                }}
              >
                <Paper
                  variant="outlined"
                  component="img"
                  src={isString(file) ? file : preview}
                  sx={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute' }}
                />
                <Box sx={{ top: 6, right: 6, position: 'absolute' }}>
                  <Button
                    size="small"
                    onClick={() => onRemove(file)}
                    sx={{
                      p: '2px',
                      color: 'common.white',
                      bgcolor: (theme) => alpha(theme.palette.grey[900], 0.72),
                      '&:hover': {
                        bgcolor: (theme) => alpha(theme.palette.grey[900], 0.48),
                      },
                    }}
                  >
                    <CloseFill />
                  </Button>
                </Box>
              </ListItem>
            );
          })}
        </AnimatePresence>
      </List>
    </Box>
  );
}
