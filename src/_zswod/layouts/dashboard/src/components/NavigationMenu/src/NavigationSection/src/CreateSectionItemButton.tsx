import { FC, useState } from 'react';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import { Tooltip, IconButton, Dialog } from '@mui/material';
import { CustomPageForm } from 'src/_zswod/modules/CustomPageCreator';
import { useCustomPageEditorNavigator } from 'src/_zswod/pages/CustomPage';

type CustomPageCreatorDialogProps = {
  open: boolean;
  onClose: VoidFunction;
};

const CustomPageCreatorDialog: FC<CustomPageCreatorDialogProps> = ({ onClose, open }) => {
  const { navigateToCustomPageEditor } = useCustomPageEditorNavigator();

  return (
    <Dialog open={open} onClose={onClose}>
      <CustomPageForm onSubmit={navigateToCustomPageEditor} />
    </Dialog>
  );
};

const CreateSectionItemButton: FC = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const openDialog = () => setDialogOpen(true);
  const closeDialog = () => setDialogOpen(false);

  return (
    <>
      <Tooltip title="Utwórz nową Własną Stronę">
        <IconButton onClick={openDialog}>
          <AddCircleRoundedIcon />
        </IconButton>
      </Tooltip>
      <CustomPageCreatorDialog onClose={closeDialog} open={dialogOpen} />
    </>
  );
};

export { CreateSectionItemButton };
