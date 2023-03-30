import { Container, Stack, Typography } from '@mui/material';
import { FC } from 'react';
import { Page } from 'src/_zswod/components/Page';
import { useArticleHeaders } from 'src/_zswod/modules/ArticleHeaders';
import { RequireRole } from 'src/_zswod/modules/User';
import { ArticlesGrid } from '../components/ArticlesGrid';
import { ArticleToolbar } from '../components/ArticleToolbar';

const ArticlesListView: FC = () => {
  const { articleHeaders } = useArticleHeaders();

  return (
    <Page title="Nowości">
      <Container>
        <Stack>
          <Typography variant="h2">Nowości</Typography>
          <Typography variant="h4">Nie pozwól by coś cię ominęło!</Typography>
          <RequireRole role="Teacher">
            <ArticleToolbar />
          </RequireRole>
          <ArticlesGrid articles={articleHeaders} />
        </Stack>
      </Container>
    </Page>
  );
};

export { ArticlesListView };
