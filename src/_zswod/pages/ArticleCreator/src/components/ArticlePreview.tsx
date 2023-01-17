import { Box, Dialog, DialogProps, Stack } from '@mui/material';
import { FC, ReactNode } from 'react';
import { ArticleContent } from 'src/_zswod/pages/Article';
import { ArticleFormContent } from '../models/ArticleFormContent';
import { ImageFormContent } from '../models/ImageFormContent';
import { ArticleImageDrop } from './utils/ArticleImageDrop';
import { FloatingBox } from './utils/FloatingBox';
import { TodoList } from './TodoList';

type ArticlePreviewProps = Pick<DialogProps, 'open' | 'onClose'> & {
  article: ArticleFormContent;
  images: ImageFormContent[];
  onImagesChange: (images: ImageFormContent[]) => void;
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

  return (
    <Dialog open={open} onClose={onClose} fullWidth scroll="body" maxWidth="md">
      <Box sx={{ minHeight: 1200 }}>
        <ArticleContent content={content} previewImageUrl={images[0]?.url} title={title} />
      </Box>
      <FloatingBox anchor="right" open width={400}>
        <ArticleImageDrop images={images} onChange={onImagesChange} />
      </FloatingBox>
      <FloatingBox open anchor="left" width={400}>
        <Stack padding={2} spacing={2}>
          <TodoList />
          {children}
        </Stack>
      </FloatingBox>
    </Dialog>
  );
};

export { ArticlePreview };
