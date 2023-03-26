import { Grid } from '@mui/material';
import { FC } from 'react';
import { ArticleHeaderModel } from 'src/_zswod/models/ArticleHeader';
import { ArticlesGridItem } from './ArticlesGridItem';

type ArticlesGridProps = {
  articles: ArticleHeaderModel[];
};

const ArticlesGrid: FC<ArticlesGridProps> = ({ articles }) => (
  <Grid container spacing={1}>
    {articles.map((articleHeader, index) => {
      const isLatest = index === 0;
      const { id } = articleHeader;
      return (
        <Grid key={id} item xs={12} sm={isLatest ? 12 : 6} lg={isLatest ? 12 : 4}>
          <ArticlesGridItem articleHeader={articleHeader} />
        </Grid>
      );
    })}
  </Grid>
);

export { ArticlesGrid };
