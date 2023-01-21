import { Drawer, DrawerProps, Paper, Stack } from '@mui/material';
import { FC, ReactNode, useRef } from 'react';

type FloatingBoxProps = Pick<DrawerProps, 'open' | 'anchor'> & {
  children: ReactNode;
  width?: string | number;
  onBackgroundClick?: () => void;
};

const FloatingBox: FC<FloatingBoxProps> = ({
  anchor,
  open,
  children,
  width,
  onBackgroundClick,
}) => {
  const backgroundEl = useRef<HTMLDivElement | null>(null);

  return (
    <Drawer
      open={open}
      variant="persistent"
      anchor={anchor}
      PaperProps={{
        ref: backgroundEl,
        onClick: (event) => {
          if (event?.target === backgroundEl.current) {
            onBackgroundClick?.();
          }
        },
        sx: { backgroundColor: 'transparent', border: 'unset' },
      }}
    >
      <Stack margin={5} sx={{ width }}>
        <Paper>{children}</Paper>
      </Stack>
    </Drawer>
  );
};

export { FloatingBox };
