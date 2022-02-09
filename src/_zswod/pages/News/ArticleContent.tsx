import {
  alpha,
  Box,
  Button,
  Card,
  CardContent,
  Paper,
  styled,
  Typography,
  useTheme,
} from '@mui/material';
import { FC } from 'react';
import Markdown from 'src/_zswod/components/Markdown';
import { PATHS_ABOUT } from 'src/_zswod/routes/src/menu.paths';
import { Link } from 'react-router-dom';

const ImgStyle = styled('img')(({ theme }) => ({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
}));

type ArticleImageProps = {
  title: string;
  image: string;
  link: string;
};

function ArticleImage({ image, title, link }: ArticleImageProps) {
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
        <Button
          component={Link}
          variant="contained"
          to={link}
          sx={{ position: 'relative', left: 0 }}
        >
          Zobacz galerię
        </Button>
      </CardContent>
    </Paper>
  );
}

type ArticleSkeleton = {
  id?: number;
  title: string;
  short: string;
  content: string;
  mainImage?: string | File;
};

type ArticleContentProps = {
  articleContent: ArticleSkeleton;
  mainImage: string | File;
};

const ArticleContent: FC<ArticleContentProps> = ({ articleContent, mainImage }) => {
  if (typeof mainImage !== 'string') {
    console.log(mainImage);
    mainImage = (mainImage as any).preview as string;
  }

  return (
    <Card>
      <ArticleImage
        title={articleContent.title}
        image={mainImage}
        link={`${PATHS_ABOUT.Galeria}/${articleContent.id}`}
      />
      <Box sx={{ margin: 3.5 }}>
        <Markdown children={articleContent.content} />
      </Box>
    </Card>
  );
};

export { ArticleContent };
export type { ArticleSkeleton };
