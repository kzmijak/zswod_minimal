import { FC } from 'react';
import { Toolbar, ToolbarButton } from 'src/_zswod/components/Toolbar';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import SendIcon from '@mui/icons-material/Send';

type CustomPageToolBarProps = {
  editMode?: boolean;
  onEditModeStart?: () => void;
  onEditModeEnd?: () => void;
  onRemove?: () => void;
};

const CustomPageToolBar: FC<CustomPageToolBarProps> = ({
  editMode,
  onEditModeEnd,
  onEditModeStart,
  onRemove,
}) => (
  <Toolbar>
    {editMode ? (
      <ToolbarButton startIcon={<SendIcon />} onClick={onEditModeEnd}>
        Opublikuj
      </ToolbarButton>
    ) : (
      <ToolbarButton startIcon={<EditIcon />} onClick={onEditModeStart}>
        Edytuj
      </ToolbarButton>
    )}
    <ToolbarButton>
      <DeleteForeverIcon onClick={onRemove} />
    </ToolbarButton>
  </Toolbar>
);

export { CustomPageToolBar };
