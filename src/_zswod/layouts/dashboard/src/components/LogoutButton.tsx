import {
  Dialog,
  DialogProps,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Fab,
  Tooltip,
} from '@mui/material';
import { FC, useState } from 'react';
import { useJwt } from 'src/_zswod/modules/User';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';

type ConfirmDialogProps = Pick<DialogProps, 'open'> & {
  onConfirm: VoidFunction;
  onClose: VoidFunction;
};
const ConfirmDialog: FC<ConfirmDialogProps> = ({ open, onClose, onConfirm }) => (
  <Dialog open={open} onClose={onClose}>
    <DialogTitle>Wylogowywanie</DialogTitle>
    <DialogContent>Czy na pewno chcesz się wylogować? </DialogContent>
    <DialogActions>
      <Button onClick={onClose}>Anuluj</Button>
      <Button variant="contained" onClick={onConfirm}>
        Potwierdź
      </Button>
    </DialogActions>
  </Dialog>
);

const LogoutButton: FC = () => {
  const { logout } = useJwt();
  const [dialogOpen, setDialogOpen] = useState(false);

  const closeDialog = () => setDialogOpen(false);
  const confirmLogout = () => {
    closeDialog();
    logout();
  };

  return (
    <>
      <Tooltip title="Wyloguj się">
        <Fab
          onClick={() => setDialogOpen(true)}
          color="default"
          sx={{
            height: 40,
            width: 40,
            backgroundColor: 'transparent',
            color: 'grey.500',
            boxShadow: 0,
          }}
        >
          <LogoutRoundedIcon />
        </Fab>
      </Tooltip>
      <ConfirmDialog open={dialogOpen} onClose={closeDialog} onConfirm={confirmLogout} />
    </>
  );
};

export { LogoutButton };
