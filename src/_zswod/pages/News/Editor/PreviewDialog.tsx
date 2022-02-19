import { Box, Dialog } from '@mui/material';
import { FC, useState } from 'react';
import { UseFormSetValue } from 'react-hook-form';
import { Image } from 'src/_zswod/models/image';
import { ContentState } from '.';
import { GalleryContent } from '../../Shared/GalleryContent';
import { ArticleContent } from '../ArticleContent';

type PreviewDialogProps = {
  open: boolean;
  onClose: (event: {}, reason: 'backdropClick' | 'escapeKeyDown') => void;
  content: ContentState;
  setValue: UseFormSetValue<ContentState>;
};

const PreviewDialog: FC<PreviewDialogProps> = ({ open, onClose, content, setValue }) => {
  const [openGalleryPreviewDialog, setOpenGalleryPreviewDialog] = useState(false);

  return (
    <>
      <Dialog scroll="body" maxWidth={'xl'} open={open} onClose={onClose}>
        <Box width={1000}>
          <ArticleContent
            articleContent={content}
            mainImage={content.images[0].uri ?? undefined}
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
            images={content.images}
            setImages={(images: Image[]) => setValue('images', images)}
            articleTitle={content.title}
            onGoToArticleClick={() => setOpenGalleryPreviewDialog(false)}
          />
        </Box>
      </Dialog>
    </>
  );
};

export { PreviewDialog };
