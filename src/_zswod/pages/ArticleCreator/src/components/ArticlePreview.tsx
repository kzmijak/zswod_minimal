import { Box, Dialog, DialogProps, Button } from '@mui/material';
import { FC } from 'react';
import { ArticleContent } from 'src/_zswod/pages/Article';
import { ArticleFormContent } from '../models/ArticleFormContent';
import { FloatingBox } from './utils/FloatingBox';
import { CreatorSummary } from './CreatorSummary';
import { GalleryViewer } from 'src/_zswod/modules/GalleryViewer';
import { ImageModel } from 'src/_zswod/models/Image';

type ArticlePreviewProps = Pick<DialogProps, 'open'> & {
  titleNormalized?: string;
  article: ArticleFormContent;
  images: ImageModel[];
  galleryTitle: string;
  onImagesChange: (images: ImageModel[]) => void;
  onClose: () => void;
};

const ArticlePreview: FC<ArticlePreviewProps> = ({
  titleNormalized,
  open,
  onClose,
  article,
  images,
  onImagesChange,
  galleryTitle,
}) => {
  const { content, title } = article;

  const previewImage = images.find((image) => image.order === 0);

  const gallery = {
    createTime: '',
    images,
    title: galleryTitle,
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth scroll="body" maxWidth="md">
      <Box sx={{ minHeight: 1200 }}>
        <ArticleContent
          content={content}
          previewImageUrl={previewImage?.src}
          title={title}
          actionButton={
            <Button variant="contained" onClick={onClose}>
              Powrót do edycji
            </Button>
          }
        />
      </Box>
      <FloatingBox onBackgroundClick={onClose} anchor="right" open width={400}>
        <GalleryViewer mutable gallery={gallery} onImagesChange={onImagesChange} />
      </FloatingBox>
      <FloatingBox open onBackgroundClick={onClose} anchor="left" width={400}>
        <CreatorSummary
          articleFormContent={article}
          galleryTitle={galleryTitle}
          images={images}
          titleNormalized={titleNormalized}
        />
      </FloatingBox>
    </Dialog>
  );
};

export { ArticlePreview };
