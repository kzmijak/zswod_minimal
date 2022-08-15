import { Paper, alpha, Typography, Box } from '@mui/material';
import { FC } from 'react';
import { FileRejection } from 'react-dropzone';
import { formatNumber } from '../../utils/formatNumber';

type RejectionFilesProps = {
  fileRejections: FileRejection[];
};

const RejectionFiles: FC<RejectionFilesProps> = ({ fileRejections }) => (
  <Paper
    variant="outlined"
    sx={{
      py: 1,
      px: 2,
      mt: 3,
      borderColor: 'error.light',
      bgcolor: (theme) => alpha(theme.palette.error.main, 0.08),
    }}
  >
    {fileRejections.map(({ file, errors }) => {
      const { size, name } = file;

      return (
        <Box key={name} sx={{ my: 1 }}>
          <Typography variant="subtitle2" noWrap>
            {name} - {size ? formatNumber(size) : ''}
          </Typography>

          {errors.map((error) => (
            <Box key={error.code} component="li" sx={{ typography: 'caption' }}>
              {error.message}
            </Box>
          ))}
        </Box>
      );
    })}
  </Paper>
);

export { RejectionFiles };
