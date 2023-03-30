import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogProps,
  DialogTitle,
} from '@mui/material';
import { FC, useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { ArticleModel } from 'src/_zswod/models/Article';
import { useAppDispatch } from 'src/_zswod/utils/useAppDispatch';
import { removeArticleById } from 'src/_zswod/modules/ArticleHeaders';
import { Link, useNavigate } from 'react-router-dom';
import { Toolbar } from 'src/_zswod/components/Toolbar';
import { PATH_DASHBOARD } from 'src/_zswod/routes';

type DeletionConfirmationTooltipProps = Pick<DialogProps, 'open'> & {
  removedArticleId: string;
  onClose: () => void;
};
const DeletionConfirmationTooltip: FC<DeletionConfirmationTooltipProps> = ({
  open,
  onClose,
  removedArticleId,
}) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const removeCurrentArticle = () => {
    dispatch(removeArticleById(removedArticleId));
    onClose();
    navigate(PATH_DASHBOARD.articles);
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Czy na pewno chcesz usunąć ten artykuł?</DialogTitle>
      <DialogContent>
        Artykuł nie zostanie trwale usunięty, jednak dostęp do niego zostanie ograniczony i będzie
        mógł go przywrócić jedynie administrator bazy danych.
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={onClose}>
          Zrezygnuj
        </Button>
        <Button variant="contained" onClick={removeCurrentArticle}>
          Usuń
        </Button>
      </DialogActions>
    </Dialog>
  );
};

type ArticleToolbarProps = Pick<ArticleModel, 'id'> & {
  titleNormalized: string;
};

const ArticleToolbar: FC<ArticleToolbarProps> = ({ id, titleNormalized }) => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const openDeletionConfirmationDialog = () => {
    setDialogOpen(true);
  };

  const closeDeletionConfirmationDialog = () => {
    setDialogOpen(false);
  };

  return (
    <>
      <Toolbar>
        <Button
          variant="outlined"
          component={Link}
          to={`/edytor/${titleNormalized}`}
          color="inherit"
          startIcon={<EditIcon />}
        >
          Edytuj
        </Button>
        <Button
          variant="outlined"
          onClick={openDeletionConfirmationDialog}
          color="inherit"
          sx={{ minWidth: 16 }}
        >
          <DeleteForeverIcon />
        </Button>
      </Toolbar>
      <DeletionConfirmationTooltip
        open={dialogOpen}
        onClose={closeDeletionConfirmationDialog}
        removedArticleId={id}
      />
    </>
  );
};

export { ArticleToolbar };
