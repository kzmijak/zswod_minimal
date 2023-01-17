import { Alert, Box, Dialog, DialogProps, Typography } from '@mui/material';
import { FC, useState } from 'react';
import { ArticleContent } from 'src/_zswod/pages/Article';
import { ArticleFormContent } from '../models/ArticleFormContent';
import { ImageFormContent } from '../models/ImageFormContent';
import { ArticleImageDrop } from './utils/ArticleImageDrop';
import { ImageForm } from './ImageForm';
import { FloatingBox } from './utils/FloatingBox';
import { createArticle, getCreateArticleError } from '../api/createArticle';
import { RequestStatus } from 'src/_zswod/utils/requestStatus';
import { LoadingButton } from '@mui/lab';

type ArticlePreviewProps = Pick<DialogProps, 'open' | 'onClose'> & {
  article: ArticleFormContent;
  images: ImageFormContent[];
  onImagesChange: (images: ImageFormContent[]) => void;
};

const ArticlePreview: FC<ArticlePreviewProps> = ({
  open,
  onClose,
  article,
  images,
  onImagesChange,
}) => {
  const { content, title } = article;

  const [status, setStatus] = useState<RequestStatus>('idle');
  const [error, setError] = useState('');

  const handlePublish = async () => {
    setStatus('loading');
    try {
      const id = await createArticle(article, images);
      setStatus('success');
      alert(id);
    } catch (err) {
      setError(getCreateArticleError(err));
      alert(getCreateArticleError(err));
      setStatus('error');
    }
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth scroll="body" maxWidth="md">
      <Box sx={{ minHeight: 1200 }}>
        <ArticleContent content={content} previewImageUrl="" title={title} />
      </Box>
      <FloatingBox anchor="right" open width={400}>
        <ArticleImageDrop images={images} onChange={onImagesChange} />
        {images.map((image, index) => (
          <ImageForm
            initialState={image}
            key={index}
            onSubmit={(form) => {
              const copy = images.slice();
              copy.splice(index, 1, form);
              onImagesChange(copy);
            }}
          />
        ))}
      </FloatingBox>
      <FloatingBox open anchor="left" width={400}>
        <Box padding={3}>
          <Typography variant="h5">To już prawie koniec</Typography>
          <Typography variant="body1">
            Jednak przed oddaniem artykułu należy się upewnić co do jego kompletności
            <br />
            Upewnij się że spełnia on następujące założenia:
          </Typography>
          <LoadingButton loading={status === 'loading'} variant="contained" onClick={handlePublish}>
            Zatwierdź i wyślij
          </LoadingButton>
          {status === 'error' && <Alert severity="error">{error}</Alert>}
        </Box>
      </FloatingBox>
    </Dialog>
  );
};

export { ArticlePreview };
