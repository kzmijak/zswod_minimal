import { alpha, Box, CardContent, Paper, Stack, Typography, useTheme } from '@mui/material';
import { FC, ReactNode } from 'react';
import { Markdown } from 'src/_zswod/components/Markdown';
import { ArticleModel } from 'src/_zswod/models/Article';
import { Blob } from 'src/_zswod/modules/Blob';

type ArticleImageProps = Pick<ArticleContentProps, 'actionButton' | 'previewBlobId' | 'title'>;

const ArticleImage: FC<ArticleImageProps> = ({ previewBlobId, title, actionButton }) => {
  const theme = useTheme();
  const hasPreview = Boolean(previewBlobId);

  return (
    <Paper
      sx={{
        position: 'relative',
      }}
    >
      <Box sx={{ height: 500 }}>
        {hasPreview && <Blob alt={title} id={previewBlobId!} sx={{ height: '100%' }} />}
      </Box>
      <Box
        sx={{
          top: 0,
          width: '100%',
          height: 500,
          position: 'absolute',
          backgroundImage: `linear-gradient(to top, ${theme.palette.grey[900]} 0%,${alpha(
            theme.palette.grey[900],
            hasPreview ? 0 : 0.8
          )} 100%)`,
        }}
      />

      <CardContent
        sx={{
          bottom: 0,
          width: '100%',
          maxWidth: 480,
          textAlign: 'left',
          position: 'absolute',
          color: 'common.white',
        }}
      >
        <Typography variant="h3" gutterBottom noWrap>
          {title}
        </Typography>
      </CardContent>
      <Box sx={{ position: 'absolute', top: 0, right: 0, margin: 2 }}>{actionButton}</Box>
    </Paper>
  );
};

type ArticleContentProps = Pick<ArticleModel, 'content' | 'title'> & {
  previewBlobId: string | undefined;
  actionButton?: ReactNode;
};

const ArticleContent: FC<ArticleContentProps> = ({
  content,
  previewBlobId: previewImageUrl,
  title,
  actionButton,
}) => (
  <Stack>
    <ArticleImage title={title} previewBlobId={previewImageUrl} actionButton={actionButton} />
    <Box sx={{ margin: 3.5 }}>
      <Markdown>{content}</Markdown>
    </Box>
  </Stack>
);

export { ArticleContent };
