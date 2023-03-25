import { Grid } from '@mui/material';
import { FC } from 'react';
import Image from 'src/components/Image';
import { ArticleHeaderModel } from 'src/_zswod/models/ArticleHeader';

type BlogGridProps = {
  articles: ArticleHeaderModel[];
};

const BlogGrid: FC<BlogGridProps> = ({ articles }) => (
  <Grid container>
    {articles.map(({ id, previewImage }) => (
      <Grid key={id} item>
        <Image src={previewImage.src} />
      </Grid>
    ))}
  </Grid>
);

export { BlogGrid };
