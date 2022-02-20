import { Box, Dialog } from '@mui/material';
import { FC, MouseEventHandler } from 'react';
import { ContentState } from '..';
import { ArticleContent } from '../../ArticleContent';
import { SendButton } from '../controls/SendButton';
import SendIcon from '@mui/icons-material/Send';

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
  const findIncompleteImages = () =>
    Boolean(content.images.find((img) => !Boolean(img.title && img.alt)));

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
        />
      </Box>
    </Dialog>
  );
};

export { ArticlePreviewDialog };
