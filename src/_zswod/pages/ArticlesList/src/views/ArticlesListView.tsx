import { Container, Stack, Typography } from '@mui/material';
import { FC } from 'react';
import { Page } from 'src/_zswod/components/Page';
import { useArticleHeaders } from 'src/_zswod/modules/ArticleHeaders';
import { BlogGrid } from '../components/BlogGrid';

const ArticlesListView: FC = () => {
  const { articleHeaders } = useArticleHeaders();

  return (
    <Page title="Nowości">
      <Container>
        <Stack>
          <Typography variant="h2">Nowości</Typography>
          <Typography variant="h4">Nie pozwól by coś cię ominęło!</Typography>
          <BlogGrid articles={articleHeaders} />
        </Stack>
      </Container>
    </Page>
  );
};

export { ArticlesListView };
