import { Fab, Tooltip, useTheme } from '@mui/material';
import { FC, MouseEventHandler, ReactNode } from 'react';
import { styled } from '@mui/system';

const FixedFabStyled = styled(Fab)(({ theme }) => ({
  position: 'fixed',
  bottom: 50,
  right: 50,
  width: 60,
  height: 60,
  zIndex: 15,
}));

type SendButtonProps = {
  tooltip: string;
  tooltipOpen: boolean;
  icon: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
};

const SendButton: FC<SendButtonProps> = ({ tooltip, icon, onClick, disabled, tooltipOpen }) => {
  const theme = useTheme();

  return (
    <Tooltip
      title={tooltip}
      open={tooltipOpen}
      arrow
      placement="left"
      componentsProps={{
        tooltip: { sx: { backgroundColor: theme.palette.success.dark } },
        arrow: { sx: { color: theme.palette.success.dark } },
      }}
    >
      <FixedFabStyled disabled={disabled} type="submit" onClick={onClick}>
        {icon}
      </FixedFabStyled>
    </Tooltip>
  );
};

export { SendButton };
