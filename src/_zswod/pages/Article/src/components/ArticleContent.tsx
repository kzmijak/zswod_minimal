import { alpha, Box, CardContent, Paper, Stack, styled, Typography, useTheme } from '@mui/material';
import { FC } from 'react';
import { Markdown } from 'src/_zswod/components/Markdown';
import { ArticleModel } from 'src/_zswod/models/Article';

const ImgStyle = styled('img')(() => ({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
}));

type ArticleImageProps = {
  title: string;
  image: string;
};

const ArticleImage: FC<ArticleImageProps> = ({ image, title }) => {
  const theme = useTheme();
  return (
    <Paper
      sx={{
        position: 'relative',
        paddingTop: { xs: '100%', md: '50%' },
      }}
    >
      {Boolean(image) && <ImgStyle alt={title} src={image} />}
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
  previewImageUrl: string;
};

const ArticleContent: FC<ArticleContentProps> = ({ content, previewImageUrl, title }) => (
  <Stack>
    <ArticleImage title={title} image={previewImageUrl} />
    <Box sx={{ margin: 3.5 }}>
      <Markdown>{content}</Markdown>
    </Box>
  </Stack>
);

export { ArticleContent };
