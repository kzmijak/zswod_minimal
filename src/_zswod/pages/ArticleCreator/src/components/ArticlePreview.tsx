import { Box, Dialog, DialogProps, Stack, Button } from '@mui/material';
import { FC, ReactNode } from 'react';
import { ArticleContent } from 'src/_zswod/pages/Article';
import { ArticleFormContent } from '../models/ArticleFormContent';
import { ImageFormContent } from '../models/ImageFormContent';
import { ArticleImageDrop } from './ArticleImageDrop';
import { FloatingBox } from './utils/FloatingBox';
import { TodoList } from './TodoList';

type ArticlePreviewProps = Pick<DialogProps, 'open'> & {
  article: ArticleFormContent;
  images: ImageFormContent[];
  onImagesChange: (images: ImageFormContent[]) => void;
  onClose: () => void;
  children: ReactNode;
};

const ArticlePreview: FC<ArticlePreviewProps> = ({
  open,
  onClose,
  article,
  images,
  onImagesChange,
  children,
}) => {
  const { content, title } = article;

  const previewImage = images.find((image) => image.isPreview);

  return (
    <Dialog open={open} onClose={onClose} fullWidth scroll="body" maxWidth="md">
      <Box sx={{ minHeight: 1200 }}>
        <ArticleContent
          content={content}
          previewBlobId={previewImage?.blobId}
          title={title}
          actionButton={
            <Button variant="contained" onClick={onClose}>
              Powrót do edycji
            </Button>
          }
        />
      </Box>
      <FloatingBox onBackgroundClick={onClose} anchor="right" open width={400}>
        <ArticleImageDrop images={images} onChange={onImagesChange} />
      </FloatingBox>
      <FloatingBox open onBackgroundClick={onClose} anchor="left" width={400}>
        <Stack padding={2} spacing={2}>
          <TodoList />
          {children}
        </Stack>
      </FloatingBox>
    </Dialog>
  );
};

export { ArticlePreview };
