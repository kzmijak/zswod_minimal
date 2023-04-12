import {
  DialogProps,
  Dialog,
  DialogTitle,
  DialogContent,
  Grid,
  IconButton,
  DialogActions,
  Button,
} from '@mui/material';
import { FC } from 'react';
import { Iconography } from 'src/_zswod/components/Iconography';
import { Icon, iconConsts } from 'src/_zswod/models/enums/Icon/src/Icon';

type IconsListDialogProps = Pick<DialogProps, 'open'> & {
  onClose: VoidFunction;
  onIconSelect: (iconId: Icon) => void;
  highlightedIcon?: Icon;
};

const IconsListDialog: FC<IconsListDialogProps> = ({
  onClose,
  open,
  onIconSelect,
  highlightedIcon,
}) => (
  <Dialog open={open} onClose={onClose}>
    <DialogTitle>Wybierz ikonę</DialogTitle>
    <DialogContent>
      <Grid container>
        {iconConsts.map((iconId) => (
          <Grid key={iconId} xs={3}>
            <IconButton
              sx={{ ...(highlightedIcon === iconId && { backgroundColor: 'primary.main' }) }}
              onClick={() => onIconSelect(iconId)}
            >
              <Iconography id={iconId} />
            </IconButton>
          </Grid>
        ))}
      </Grid>
    </DialogContent>
    <DialogActions>
      <Button onClick={onClose}>Anuluj</Button>
    </DialogActions>
  </Dialog>
);
export { IconsListDialog };
