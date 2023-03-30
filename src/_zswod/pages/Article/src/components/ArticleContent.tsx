import { Box, Stack } from '@mui/material';
import { FC } from 'react';
import { Markdown } from 'src/_zswod/components/Markdown';
import { ArticleModel } from 'src/_zswod/models/Article';
import { RequireRole } from 'src/_zswod/modules/User';
import { ArticleImage, ArticleImageProps } from './ArticleImage';
import { ArticleToolbar } from './ArticleToolbar';

type ArticleContentProps = Pick<ArticleModel, 'content' | 'title'> &
  Pick<ArticleImageProps, 'actionButton' | 'previewImageUrl'> & {
    id?: string;
    showToolbar?: boolean;
    titleNormalized?: string;
  };

const ArticleContent: FC<ArticleContentProps> = ({
  content,
  previewImageUrl,
  title,
  actionButton,
  id,
  showToolbar,
  titleNormalized,
}) => {
  const toolbarVisible = showToolbar && id && titleNormalized;

  return (
    <Stack>
      <ArticleImage title={title} previewImageUrl={previewImageUrl} actionButton={actionButton} />
      <RequireRole role="Teacher">
        {toolbarVisible && <ArticleToolbar titleNormalized={titleNormalized} id={id} />}
      </RequireRole>
      <Box sx={{ margin: 3.5 }}>
        <Markdown>{content}</Markdown>
      </Box>
    </Stack>
  );
};

export { ArticleContent };
