import {
  alpha,
  Box,
  Button,
  Card,
  CardContent,
  Paper,
  styled,
  Tooltip,
  Typography,
  useTheme,
} from '@mui/material';
import { FC, MouseEventHandler } from 'react';
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
  onGoToGallery: MouseEventHandler<HTMLButtonElement>;
  alertTooltipContent?: string;
};

const ArticleImage: FC<ArticleImageProps> = ({
  image,
  title,
  onGoToGallery,
  alertTooltipContent,
}) => {
  const theme = useTheme();
  return (
    <Paper
      sx={{
        position: 'relative',
        paddingTop: { xs: '100%', md: '50%' },
      }}
    >
      <ImgStyle alt={title} src={image} />
      <Box
        sx={{
          top: 0,
          width: '100%',
          height: '100%',
          position: 'absolute',
          backgroundImage: `linear-gradient(to top, ${theme.palette.grey[900]} 0%,${alpha(
            theme.palette.grey[900],
            0
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
        <Tooltip
          open={true}
          placement="right"
          arrow
          title={alertTooltipContent ?? ''}
          componentsProps={{
            tooltip: { sx: { backgroundColor: theme.palette.error.dark } },
            arrow: { sx: { color: theme.palette.error.dark } },
          }}
        >
          <Button
            variant="contained"
            onClick={onGoToGallery}
            sx={{ position: 'relative', left: 0 }}
          >
            Zobacz galerię
          </Button>
        </Tooltip>
      </CardContent>
    </Paper>
  );
};

type ArticleContentProps = {
  articleContent: ArticleModel;
  onGoToGallery: MouseEventHandler<HTMLButtonElement>;
  alertTooltipContent?: string;
};

const ArticleContent: FC<ArticleContentProps> = ({
  articleContent,
  onGoToGallery,
  alertTooltipContent,
}) => (
  <Card>
    <ArticleImage
      title={articleContent.title}
      image={articleContent.previewImageUrl}
      onGoToGallery={onGoToGallery}
      alertTooltipContent={alertTooltipContent}
    />
    <Box sx={{ margin: 3.5 }}>
      <Markdown children={articleContent.content} />
      {articleContent.content}
    </Box>
  </Card>
);

export { ArticleContent };
