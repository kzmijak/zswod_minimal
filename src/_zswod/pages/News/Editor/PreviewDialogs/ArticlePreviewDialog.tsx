import { Box, Dialog } from '@mui/material';
import { FC, MouseEventHandler, useEffect } from 'react';
import { ContentState } from '..';
import { ArticleContent } from '../../ArticleContent';
import { SendButton } from '../controls/SendButton';
import SendIcon from '@mui/icons-material/Send';
import { useArticlesContext } from 'src/_zswod/hooks/useArticlesContext';
import { ImageSubrequest } from 'src/_zswod/models/Article/createArticleRequest';
import { useNavigate } from 'react-router';
import { Article } from 'src/_zswod/models/Article/article';
import { PATHS_ABOUT } from 'src/_zswod/routes/src/menu.paths';

type ArticlePreviewDialogProps = {
  open: boolean;
  onClose: (event: {}, reason: 'backdropClick' | 'escapeKeyDown') => void;
  content: ContentState;
  onGoToGallery: MouseEventHandler<HTMLButtonElement>;
};

const ArticlePreviewDialog: FC<ArticlePreviewDialogProps> = ({
  open,
  onClose,
  content,
  onGoToGallery,
}) => {
  const { createArticle } = useArticlesContext();
  const navigate = useNavigate();

  const findIncompleteImages = () =>
    Boolean(content.images.find((img) => !Boolean(img.title && img.alt)));

  const imageToUri = (url: string) =>
    new Promise((resolve, _) => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');

      var base_image = new Image();
      base_image.src = url;
      base_image.onload = function () {
        canvas.width = base_image.width;
        canvas.height = base_image.height;

        ctx!.drawImage(base_image, 0, 0);

        canvas.remove();

        resolve(canvas.toDataURL('image'));
      };
    });

  const publishArticle = async () => {
    const imagesWithUris = await Promise.all(
      content.images.map(async (i) => ({
        alt: i.alt,
        image: await imageToUri(i.uri),
        order: 0,
        title: i.title,
      }))
    );

    const newArticleId = await createArticle({
      content: content.content,
      images: imagesWithUris as ImageSubrequest[],
      short: content.short,
      title: content.title,
    });

    navigate(`${PATHS_ABOUT.Nowości}/${newArticleId}`);
  };

  return (
    <Dialog scroll="body" maxWidth={'xl'} open={open} onClose={onClose}>
      <Box width={1000}>
        <ArticleContent
          articleContent={content}
          mainImage={content.images[0].uri ?? undefined}
          onGoToGallery={onGoToGallery}
          alertTooltipContent={
            findIncompleteImages() ? 'Uzupełnij wszystkie obrazy przed publikacją' : ''
          }
        />
        <SendButton
          tooltipOpen={!findIncompleteImages()}
          disabled={findIncompleteImages()}
          icon={<SendIcon />}
          tooltip={'Możesz już opublikować artykuł'}
          onClick={() => publishArticle()}
        />
      </Box>
    </Dialog>
  );
};

export { ArticlePreviewDialog };
