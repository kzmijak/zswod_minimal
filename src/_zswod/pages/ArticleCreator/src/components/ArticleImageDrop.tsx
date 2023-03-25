import { FC, useState } from 'react';
import { ImageFormContent } from '../models/ImageFormContent';
import {
  Dialog,
  Fab,
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Stack,
  Tooltip,
  useTheme,
} from '@mui/material';
import { ImageForm } from './ImageForm';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import { GalleryIllustration } from '../assets/illustration_gallery';
import { GetImagesButton } from './utils/GetImagesButton';
import { BlobsSelect, useBlobUrl } from 'src/_zswod/modules/Blob';
import Scrollbar from 'src/components/Scrollbar';
import HighlightOffTwoToneIcon from '@mui/icons-material/HighlightOffTwoTone';
import { removeFromArray } from 'src/_zswod/utils/removeFromArray';
import Image from 'src/components/Image';
import { arrayMapBlobToImage } from 'src/_zswod/models/extraMappers';

type ArticleImageDropProps = {
  images: ImageFormContent[];
  onChange: (newArray: ImageFormContent[]) => void;
};

const ArticleImageDrop: FC<ArticleImageDropProps> = ({ images, onChange }) => {
  const [savedImagesOpen, setSavedImagesOpen] = useState(false);
  const [imageFormOpen, setImageFormOpen] = useState(false);
  const [editedImage, setEditedImage] = useState<ImageFormContent | null>(null);
  const { getUrl } = useBlobUrl();
  const theme = useTheme();

  const openDialog = (image: ImageFormContent) => {
    setEditedImage(image);
    setImageFormOpen(true);
  };

  const closeDialog = () => {
    setImageFormOpen(false);
  };

  const removeItem = (order: number) => {
    onChange(removeFromArray(images, (image) => image.order === order));
  };

  return (
    <>
      <Stack padding={2}>
        <Stack direction="row">
          <GetImagesButton
            illustration={<GalleryIllustration sx={{ width: 100, height: 100 }} />}
            onClick={() => setSavedImagesOpen(true)}
            subtitle="Wybierz z&nbsp;zapisanych"
          />
        </Stack>
        <Scrollbar sx={{ height: 600 }}>
          <ImageList rowHeight={168} sx={{ margin: 1.5 }}>
            {images.map((imageForm) => {
              const { alt, src, order } = imageForm;
              const isPreview = order === 0;
              return (
                <ImageListItem key={src} sx={{ cursor: 'pointer' }}>
                  <Image
                    src={src}
                    alt={alt}
                    sx={{
                      borderRadius: 2,
                      objectFit: 'cover',
                      height: '100%',
                      width: '100%',
                      ...(isPreview && { border: `solid 4px ${theme.palette.warning.main}` }),
                    }}
                  />
                  <ImageListItemBar
                    sx={{
                      borderRadius: '0 0 10px 10px',
                      background:
                        'linear-gradient(to top, rgba(0,0,0,0.7) 0%, ' +
                        'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                    }}
                    actionIcon={
                      <Tooltip title="Edytuj">
                        <Fab
                          sx={{ margin: 1 }}
                          size="small"
                          onClick={(event) => {
                            event.stopPropagation();
                            openDialog(imageForm);
                          }}
                          color={Boolean(imageForm.alt) ? 'default' : 'warning'}
                        >
                          <EditRoundedIcon />
                        </Fab>
                      </Tooltip>
                    }
                  />
                  <ImageListItemBar
                    position="top"
                    sx={{ backgroundColor: 'transparent' }}
                    actionIcon={
                      <Tooltip title="Usuń">
                        <IconButton
                          sx={{ color: 'black' }}
                          size="medium"
                          onClick={(event) => {
                            event.stopPropagation();
                          }}
                        >
                          <HighlightOffTwoToneIcon />
                        </IconButton>
                      </Tooltip>
                    }
                  />
                </ImageListItem>
              );
            })}
          </ImageList>
        </Scrollbar>
      </Stack>
      <Dialog open={imageFormOpen} onClose={closeDialog}>
        <ImageForm
          initialState={editedImage!}
          onSubmit={(imageForm) => {
            removeItem(imageForm.order);
            closeDialog();
          }}
        />
      </Dialog>
      <Dialog open={savedImagesOpen} onClose={() => setSavedImagesOpen(false)}>
        <BlobsSelect
          onSubmit={(newBlobs) => {
            const uniqueBlobs = newBlobs.filter(
              (blob) => !images.some((image) => !image.src.includes(blob.id))
            );
            const blobsConverted = arrayMapBlobToImage(uniqueBlobs, getUrl);
            onChange([...images, ...blobsConverted]);
            setSavedImagesOpen(false);
          }}
        />
      </Dialog>
    </>
  );
};

export { ArticleImageDrop };
