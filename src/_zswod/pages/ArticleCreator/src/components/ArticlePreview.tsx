import { Box, Button, Dialog, DialogProps, Typography } from '@mui/material';
import { FC, useState } from 'react';
import { useCurrentArticle } from 'src/_zswod/modules/CurrentArticle';
import { ArticleContent } from 'src/_zswod/pages/Article';
import { arrayPick } from 'src/_zswod/utils/lodash';
import { ArticleFormContent } from '../models/ArticleFormContent';
import { ImageFormContent } from '../models/ImageFormContent';
import { ArticleImageDrop } from './utils/ArticleImageDrop';
import { ImageForm } from './ImageForm';
import { FloatingBox } from './utils/FloatingBox';

type ArticlePreviewProps = Pick<DialogProps, 'open' | 'onClose'> & { article: ArticleFormContent };

const ArticlePreview: FC<ArticlePreviewProps> = ({ open, onClose, article }) => {
  const { content, title } = article;
  const { images } = useCurrentArticle();
  const initialImages = arrayPick<ImageFormContent>(images, 'title', 'alt', 'url');

  const [imageFormModels, setImageFormModels] = useState<ImageFormContent[]>(initialImages);

  return (
    <Dialog open={open} onClose={onClose} fullWidth scroll="body" maxWidth="md">
      <ArticleContent content={content} previewImageUrl="" title={title} />
      <FloatingBox anchor="right" open width={400}>
        <ArticleImageDrop
          images={imageFormModels}
          onChange={(images) => setImageFormModels(images)}
        />
        {imageFormModels.map((imageFormModel, index) => (
          <ImageForm
            initialState={imageFormModel}
            key={index}
            onSubmit={(form) => {
              const copy = imageFormModels.slice();
              copy.splice(index, 1, form);
              setImageFormModels(copy);
            }}
          />
        ))}
        <Button>Zatwierdź i wyślij</Button>
      </FloatingBox>
      <FloatingBox open anchor="left" width={400}>
        <Box padding={3}>
          <Typography variant="h5">To już prawie koniec</Typography>
          <Typography variant="body1">
            Jednak przed oddaniem artykułu należy się upewnić co do jego kompletności
            <br />
            Upewnij się że spełnia on następujące założenia:
          </Typography>
        </Box>
      </FloatingBox>
    </Dialog>
  );
};

export { ArticlePreview };
