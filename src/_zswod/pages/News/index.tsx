import { Timeline } from '@mui/lab';
import { Container, Grid, Paper, Stack, Typography } from '@mui/material';
import { FC, useMemo } from 'react';
import { useSelector } from 'react-redux';
import Image from 'src/components/Image';
import { Page } from 'src/_zswod/components';
import { TimeOutlinedList } from 'src/_zswod/components/TimeOutlinedList';
import { useArticlesContext } from 'src/_zswod/hooks/useArticlesContext';
import { getArticles } from 'src/_zswod/redux/article/selectors';
import { useGreeter, newsGreeter } from 'src/_zswod/utils/Greeters/useGreeter';

const News: FC = () => {
  const articles = useSelector(getArticles);
  const greeter = useGreeter(newsGreeter);

  const { getArticlePrimaryImage } = useArticlesContext();
  return (
    <Page title="Nowości">
      <Container>
        <Typography component="div" variant="overline" sx={{ color: 'text.disabled' }}>
          {greeter}
        </Typography>
        <Typography variant="h1" sx={{ mb: 5 }}>
          Nowości
        </Typography>

        <Stack direction="column" spacing={3}>
          <Timeline position="left">
            {articles.map((article) => {
              const image = getArticlePrimaryImage(article.id);
              return (
                <TimeOutlinedList key={article.id} date={article.date}>
                  <Paper elevation={2} sx={{ height: 200 }}>
                    <Grid container>
                      <Grid item xs={3}>
                        <Image
                          src={image?.uri ?? ''}
                          alt={image?.alt ?? ''}
                          maxHeight={190}
                          minHeight={190}
                          visibility={image ? 'visible' : 'hidden'}
                          sx={{ borderRadius: 0.8, margin: 0.5 }}
                        />
                      </Grid>
                      <Grid item xs={9} sx={{ pl: 3 }}>
                        <Stack direction="column" sx={{ pt: 2 }}>
                          <Typography variant="h4">{article.title}</Typography>
                          <Typography variant="body2">{article.short}</Typography>
                        </Stack>
                      </Grid>
                    </Grid>
                  </Paper>
                </TimeOutlinedList>
              );
            })}
          </Timeline>
        </Stack>
      </Container>
    </Page>
  );
};

export { News };
