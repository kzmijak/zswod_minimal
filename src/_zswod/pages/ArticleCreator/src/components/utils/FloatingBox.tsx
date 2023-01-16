import { Drawer, DrawerProps, Paper, Stack } from '@mui/material';
import { FC, ReactNode } from 'react';

type FloatingBoxProps = Pick<DrawerProps, 'open' | 'anchor'> & {
  children: ReactNode;
  width?: string | number;
};

const FloatingBox: FC<FloatingBoxProps> = ({ anchor, open, children, width }) => (
  <Drawer
    open={open}
    variant="persistent"
    anchor={anchor}
    PaperProps={{
      sx: { backgroundColor: 'transparent', border: 'unset' },
    }}
  >
    <Stack margin={5} sx={{ width }}>
      <Paper>{children}</Paper>
    </Stack>
  </Drawer>
);

export { FloatingBox };
