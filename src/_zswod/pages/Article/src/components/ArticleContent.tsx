import { alpha, Box, CardContent, Paper, Stack, styled, Typography, useTheme } from '@mui/material';
import { FC } from 'react';
import { Markdown } from 'src/_zswod/components/Markdown';
import { ArticleModel } from 'src/_zswod/models/Article';
import { Blob } from 'src/_zswod/modules/Blob';

// const ImgStyle = styled(Blob)(() => ({
//   top: 0,
//   width: '100%',
//   height: '100%',
//   objectFit: 'cover',
//   position: 'absolute',
// }));

type ArticleImageProps = {
  title: string;
  previewBlobId: string | undefined;
};

const ArticleImage: FC<ArticleImageProps> = ({ previewBlobId, title }) => {
  const theme = useTheme();
  return (
    <Paper
      sx={{
        position: 'relative',
        paddingTop: { xs: '100%', md: '50%' },
      }}
    >
      {Boolean(previewBlobId) && <Blob alt={title} id={previewBlobId!} />}
      <Box
        sx={{
          top: 0,
          width: '100%',
          height: '100%',
          position: 'absolute',
          backgroundImage: `linear-gradient(to top, ${theme.palette.grey[900]} 0%,${alpha(
            theme.palette.grey[900],
            0.8
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
        <Typography variant="h3" gutterBottom>
          {title}
        </Typography>
      </CardContent>
    </Paper>
  );
};

type ArticleContentProps = Pick<ArticleModel, 'content' | 'title'> & {
  previewBlobId: string | undefined;
};

const ArticleContent: FC<ArticleContentProps> = ({
  content,
  previewBlobId: previewImageUrl,
  title,
}) => (
  <Stack>
    <ArticleImage title={title} previewBlobId={previewImageUrl} />
    <Box sx={{ margin: 3.5 }}>
      <Markdown>{content}</Markdown>
    </Box>
  </Stack>
);

export { ArticleContent };
