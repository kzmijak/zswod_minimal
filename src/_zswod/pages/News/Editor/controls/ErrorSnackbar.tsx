import { Snackbar, Alert } from '@mui/material';
import { FC } from 'react';

type ErrorSnackbarProps = {
  message?: string;
};

const ErrorSnackbar: FC<ErrorSnackbarProps> = ({ message }) => (
  <Snackbar open={Boolean(message)} autoHideDuration={100}>
    <Alert variant="filled" severity="error">
      {message}
    </Alert>
  </Snackbar>
);

export { ErrorSnackbar };
