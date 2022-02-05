import { Box, Dialog } from '@mui/material';
import { FC } from 'react';
import { ArticleContent, ArticleSkeleton } from '../ArticleContent';

type PreviewDialogProps = {
  open: boolean;
  onClose: (event: {}, reason: 'backdropClick' | 'escapeKeyDown') => void;
  article: ArticleSkeleton;
  images: (string | File)[];
};

const PreviewDialog: FC<PreviewDialogProps> = ({ open, onClose, article, images }) => (
  <Dialog scroll="body" maxWidth={'xl'} open={open} onClose={onClose}>
    <Box width={1000}>
      <ArticleContent articleContent={article} mainImage={images[0]} />
    </Box>
  </Dialog>
);

export { PreviewDialog };
