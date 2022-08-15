import { Stack, Typography, Box } from '@mui/material';
import { FC } from 'react';
import { UploadIllustration } from 'src/assets';

const DropButton: FC = () => (
  <Stack
    spacing={2}
    alignItems="center"
    justifyContent="center"
    direction={{ xs: 'column', md: 'row' }}
    sx={{ width: 1, textAlign: { xs: 'center', md: 'left' } }}
  >
    <UploadIllustration sx={{ width: 220 }} />

    <Box sx={{ p: 3 }}>
      <Typography gutterBottom variant="h5">
        Przerzuć lub Wybierz obraz
      </Typography>

      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        Drop files here or click&nbsp;
        <Typography
          variant="body2"
          component="span"
          sx={{ color: 'primary.main', textDecoration: 'underline' }}
        >
          browse
        </Typography>
        &nbsp;thorough your machine
      </Typography>
    </Box>
  </Stack>
);

export { DropButton };
