import { Alert, AlertTitle, Grow } from '@mui/material';
import { FC } from 'react';

type WarningProps = {
  title?: string;
  content: string;
  error?: boolean;
};

const Warning: FC<WarningProps> = ({ content, title, error = true }) => (
  <Grow in>
    <Alert variant="outlined" severity={error ? 'error' : 'success'}>
      {Boolean(title) && <AlertTitle>{title}</AlertTitle>}
      {content}
    </Alert>
  </Grow>
);

export { Warning };
