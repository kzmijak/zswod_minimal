import { FC, useRef, useState } from 'react';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import { Tooltip, IconButton, Popover, PopoverProps, Paper } from '@mui/material';
import { CustomPageForm, CustomPageFormContent } from 'src/_zswod/modules/CustomPageCreator';
import { useCustomPageEditorNavigator } from 'src/_zswod/pages/CustomPage';

type CustomPageCreatorDialogProps = Pick<PopoverProps, 'open' | 'anchorEl'> & {
  onClose: VoidFunction;
  sectionName: string;
};
const CustomPageCreatorDialog: FC<CustomPageCreatorDialogProps> = ({
  onClose,
  open,
  anchorEl,
  sectionName,
}) => {
  const { navigateToCustomPageEditor } = useCustomPageEditorNavigator();

  const handleFormSubmit = (formContent: CustomPageFormContent) => {
    onClose();
    navigateToCustomPageEditor(formContent);
  };

  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{
        vertical: 'center',
        horizontal: 'left',
      }}
      transformOrigin={{
        vertical: 'center',
        horizontal: 'right',
      }}
    >
      <Paper variant="outlined">
        <CustomPageForm onSubmit={handleFormSubmit} initialValues={{ section: sectionName }} />
      </Paper>
    </Popover>
  );
};

type CreateSectionItemButtonProps = {
  sectionName: string;
};
const CreateSectionItemButton: FC<CreateSectionItemButtonProps> = ({ sectionName }) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const iconButtonRef = useRef<HTMLButtonElement>(null);

  const openDialog = () => setDialogOpen(true);
  const closeDialog = () => setDialogOpen(false);

  return (
    <>
      <Tooltip title="Utwórz nową Własną Stronę">
        <IconButton onClick={openDialog} ref={iconButtonRef}>
          <AddCircleRoundedIcon />
        </IconButton>
      </Tooltip>
      <CustomPageCreatorDialog
        sectionName={sectionName}
        onClose={closeDialog}
        open={dialogOpen}
        anchorEl={iconButtonRef.current}
      />
    </>
  );
};

export { CreateSectionItemButton };
