import { Fab } from '@mui/material';
import { FC, MouseEventHandler } from 'react';
import SendIcon from '@mui/icons-material/Send'; // material
import { styled } from '@mui/system';

const FixedFabStyled = styled(Fab)(({ theme }) => ({
  position: 'fixed',
  bottom: 50,
  right: 50,
  width: 60,
  height: 60,
  zIndex: 15,
}));

const SendIconStyled = styled(SendIcon)(({ theme }) => ({
  height: 25,
  width: 25,
}));

type SendButtonProps = { onClick: MouseEventHandler<HTMLButtonElement> };

const SendButton: FC<SendButtonProps> = ({ onClick }) => (
  <FixedFabStyled onClick={onClick}>
    <SendIconStyled />
  </FixedFabStyled>
);

export { SendButton };
