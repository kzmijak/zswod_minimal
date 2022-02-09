import { Box, Dialog } from '@mui/material';
import { FC } from 'react';
import { ContentState } from '.';
import { ArticleContent } from '../ArticleContent';

type PreviewDialogProps = {
  open: boolean;
  onClose: (event: {}, reason: 'backdropClick' | 'escapeKeyDown') => void;
  content: ContentState;
};

const PreviewDialog: FC<PreviewDialogProps> = ({ open, onClose, content }) => (
  <Dialog scroll="body" maxWidth={'xl'} open={open} onClose={onClose}>
    <Box width={1000}>
      <ArticleContent articleContent={content} mainImage={content.images[0] ?? undefined} />
    </Box>
  </Dialog>
);

export { PreviewDialog };
