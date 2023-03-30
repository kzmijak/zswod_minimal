import { useTheme, Paper, alpha, CardContent, Typography, Box } from '@mui/material';
import { FC, ReactNode } from 'react';
import Image from 'src/components/Image';
import { ArticleModel } from 'src/_zswod/models/Article';

type ArticleImageProps = Pick<ArticleModel, 'title'> & {
  previewImageUrl: string | undefined;
  actionButton?: ReactNode;
};

const ArticleImage: FC<ArticleImageProps> = ({ previewImageUrl, title, actionButton }) => {
  const theme = useTheme();
  const hasPreview = Boolean(previewImageUrl);

  return (
    <Paper
      sx={{
        position: 'relative',
      }}
    >
      <Box sx={{ height: 500 }}>
        {hasPreview && <Image alt={title} src={previewImageUrl} sx={{ height: '100%' }} />}
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

export { ArticleImage };
export type { ArticleImageProps };
