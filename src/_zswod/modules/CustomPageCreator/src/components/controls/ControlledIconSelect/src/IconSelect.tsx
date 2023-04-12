import { IconButton } from '@mui/material';
import { FC, useState } from 'react';
import { Iconography } from 'src/_zswod/components/Iconography';
import { Icon } from 'src/_zswod/models/enums/Icon';
import { IconsListDialog } from './IconsListDialog';

type IconSelectProps = {
  onSelect: (iconId: Icon) => void;
  iconId: Icon;
};

const IconSelect: FC<IconSelectProps> = ({ iconId, onSelect }) => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const openDialog = () => {
    setDialogOpen(true);
  };
  const closeDialog = () => {
    setDialogOpen(false);
  };
  const handleIconSelect = (iconId: Icon) => {
    closeDialog();

    onSelect(iconId);
  };
  return (
    <>
      <IconButton onClick={openDialog}>
        <Iconography id={iconId} />
      </IconButton>
      <IconsListDialog
        open={dialogOpen}
        onClose={closeDialog}
        onIconSelect={handleIconSelect}
        highlightedIcon={iconId}
      />
    </>
  );
};

export { IconSelect };
