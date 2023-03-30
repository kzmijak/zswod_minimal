import { LoadingButton } from '@mui/lab';
import {
  Button,
  Tooltip,
  Stack,
  DialogProps,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions,
} from '@mui/material';

import { FC, useState } from 'react';
import { useNavigate } from 'react-router';
import { ImageModel } from 'src/_zswod/models/Image';
import { invalidateArticlesFetch } from 'src/_zswod/modules/ArticleHeaders';
import { PATH_DASHBOARD } from 'src/_zswod/routes';
import { RequestStatus } from 'src/_zswod/utils/requestStatus';
import { useAppDispatch } from 'src/_zswod/utils/useAppDispatch';
import { createArticle, getCreateArticleError } from '../../api/createArticle';
import { updateArticle } from '../../api/updateArticle';
import { ArticleFormContent } from '../../models/ArticleFormContent';

type PublishFailedDialogProps = Pick<DialogProps, 'open'> & {
  errorMessage: string;
  onClose: () => void;
};
const PublishFailedDialog: FC<PublishFailedDialogProps> = ({ errorMessage, open, onClose }) => (
  <Dialog open={open} onClose={onClose}>
    <DialogContent>
      <DialogContentText>{errorMessage}</DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button variant="contained" autoFocus onClick={onClose}>
        Zamknij
      </Button>
    </DialogActions>
  </Dialog>
);

type PublishButtonProps = {
  titleNormalized: string | undefined;
  articleFormContent: ArticleFormContent;
  images: ImageModel[];
  galleryTitle: string;
};

const PublishButton: FC<PublishButtonProps> = ({
  articleFormContent,
  galleryTitle,
  images,
  titleNormalized,
}) => {
  const isEditMode = Boolean(titleNormalized);
  const hasImages = images.length > 0;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [dialogOpen, setDialogOpen] = useState(false);
  const [status, setStatus] = useState<RequestStatus>('idle');
  const [error, setError] = useState('');

  const openFailureDialog = () => {
    setDialogOpen(true);
  };
  const closeFailureDialog = () => {
    setDialogOpen(false);
  };

  const handlePublish = async () => {
    setStatus('loading');
    try {
      await (isEditMode
        ? updateArticle(titleNormalized!, articleFormContent, images)
        : createArticle(articleFormContent, galleryTitle, images));
      dispatch(invalidateArticlesFetch());
      setStatus('success');
      navigate(PATH_DASHBOARD.articles);
    } catch (err) {
      setError(getCreateArticleError(err));
      openFailureDialog();
      setStatus('error');
    }
  };

  return (
    <>
      <Tooltip
        title={!hasImages && 'Przed opublikowaniem artykułu należy załączyć minimalnie jeden obraz'}
      >
        <Stack minWidth="100%">
          <LoadingButton
            loading={status === 'loading'}
            disabled={!hasImages}
            variant="contained"
            onClick={handlePublish}
          >
            Opublikuj
          </LoadingButton>
        </Stack>
      </Tooltip>
      <PublishFailedDialog open={dialogOpen} onClose={closeFailureDialog} errorMessage={error} />
    </>
  );
};

export { PublishButton };
