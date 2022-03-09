import { Box, Dialog } from '@mui/material';
import { FC, MouseEventHandler } from 'react';
import { UseFormSetValue } from 'react-hook-form';
import { Image } from 'src/_zswod/models/Image/image';
import { ContentState } from '..';
import { GalleryContent } from '../../../Shared/GalleryContent';

type GalleryPreviewDialogProps = {
  open: boolean;
  onClose: (event: {}, reason: 'backdropClick' | 'escapeKeyDown') => void;
  content: ContentState;
  setValue: UseFormSetValue<ContentState>;
  onGoToArticle: MouseEventHandler<HTMLButtonElement>;
};

const GalleryPreviewDialog: FC<GalleryPreviewDialogProps> = ({
  content,
  open,
  onClose,
  setValue,
  onGoToArticle,
}) => (
  <Dialog scroll="body" maxWidth={'xl'} open={open} onClose={onClose}>
    <Box width={800} sx={{ margin: 2 }}>
      <GalleryContent
        images={content.images}
        setImages={(images: Image[]) => setValue('images', images)}
        articleTitle={content.title}
        onGoToArticleClick={onGoToArticle}
      />
    </Box>
  </Dialog>
);

export { GalleryPreviewDialog };
