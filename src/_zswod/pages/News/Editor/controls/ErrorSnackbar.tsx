import { Snackbar, Alert } from '@mui/material';
import { FC } from 'react';

type ErrorSnackbarProps = {
  open: boolean;
};

const ErrorSnackbar: FC<ErrorSnackbarProps> = ({ open }) => (
  <Snackbar open={open} autoHideDuration={500}>
    <Alert variant="filled" severity="error">
      Artykuł musi zawierać tytuł, zapowiedź, minimalnie jedno zdjęcie oraz treść.
    </Alert>
  </Snackbar>
);

export { ErrorSnackbar };
