import { Box, Card, Dialog } from '@mui/material';
import { FC, useState } from 'react';
import { ContentState } from '.';
import { GalleryContent } from '../../Shared/GalleryContent';
import { ArticleContent } from '../ArticleContent';

type PreviewDialogProps = {
  open: boolean;
  onClose: (event: {}, reason: 'backdropClick' | 'escapeKeyDown') => void;
  content: ContentState;
};

const PreviewDialog: FC<PreviewDialogProps> = ({ open, onClose, content }) => {
  const [openGalleryPreviewDialog, setOpenGalleryPreviewDialog] = useState(false);
  const urlImages = content.images.map<string>((i) =>
    typeof i !== 'string' ? ((i as any).preview as string) : i
  );

  return (
    <>
      <Dialog scroll="body" maxWidth={'xl'} open={open} onClose={onClose}>
        <Box width={1000}>
          <ArticleContent
            articleContent={content}
            mainImage={content.images[0] ?? undefined}
            onGoToArticle={() => setOpenGalleryPreviewDialog(true)}
          />
        </Box>
      </Dialog>
      <Dialog
        scroll="body"
        maxWidth={'xl'}
        open={openGalleryPreviewDialog}
        onClose={() => setOpenGalleryPreviewDialog(false)}
      >
        <Box width={800} sx={{ margin: 2 }}>
          <GalleryContent
            articleTitle={content.title}
            previews={urlImages}
            onGoToArticleClick={() => setOpenGalleryPreviewDialog(false)}
          />
        </Box>
      </Dialog>
    </>
  );
};

export { PreviewDialog };
