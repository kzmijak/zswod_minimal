import { Box, styled, Typography, useTheme } from '@mui/material';
import { AnimatePresence, m } from 'framer-motion';
import { FC, ReactNode } from 'react';

const ErrorBadge = styled(m.div)(({ theme }) => ({
  color: theme.palette.common.white,

  borderRadius: '0 10px 10px 10px',
  boxShadow: `0 0 0 4px ${theme.palette.background.default}`,
  padding: 1,
  paddingRight: 10,
  paddingLeft: 10,
  position: 'absolute',
  right: 20,
  zIndex: 100,
}));

type ErrorSocketProps = {
  children: ReactNode;
  message?: string;
};

const ErrorSocket: FC<ErrorSocketProps> = ({ message, children }) => {
  const isError = Boolean(message);
  const theme = useTheme();
  const colorPrimary = theme.palette.primary.main;
  const colorError = theme.palette.error.main;

  return (
    <Box>
      <Box zIndex={101}>{children}</Box>
      <Box position="relative">
        <AnimatePresence>
          {isError && (
            <ErrorBadge
              initial={{ height: 0, top: -10, backgroundColor: colorError }}
              animate={{ height: 'inherit' }}
              exit={{ height: 0, top: 0, backgroundColor: colorPrimary }}
              transition={{
                bounce: 0.5,
                duration: 0.2,
              }}
            >
              <Typography variant="body2">{message}</Typography>
            </ErrorBadge>
          )}
        </AnimatePresence>
      </Box>
    </Box>
  );
};

export { ErrorSocket };
