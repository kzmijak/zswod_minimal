import { forwardRef } from 'react';
// material
import { IconButton, IconButtonProps } from '@mui/material';
//
import { ButtonAnimate } from 'src/components/animate';

// ----------------------------------------------------------------------

const MIconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ children, ...other }, ref) => (
    <ButtonAnimate>
      <IconButton ref={ref} {...other}>
        {children}
      </IconButton>
    </ButtonAnimate>
  )
);

export { MIconButton };
