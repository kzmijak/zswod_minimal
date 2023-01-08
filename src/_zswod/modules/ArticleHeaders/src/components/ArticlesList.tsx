import { Container, Typography, Stack, Fab, Paper, Grid, Button } from '@mui/material';
import { Timeline } from '@mui/lab';
import { FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectArticleHeaders } from '../..';
import { selectStatus } from '../slice/selectors';
import { TimeOutlinedList } from 'src/_zswod/components/TimeOutlinedList';
import Image from 'src/components/Image';

const ArticlesList: FC = () => {
  const navigate = useNavigate();

  const articles = useSelector(selectArticleHeaders);
  const { status } = useSelector(selectStatus);

  if (status !== 'success') return null;

  return (
    <Container>
      <Stack direction="row" spacing={3}>
        <Typography variant="h1" sx={{ mb: 5 }}>
          Nowości
        </Typography>
        <Fab variant="circular" component={Link} to="/edytor">
          Dodaj
        </Fab>
      </Stack>

      <Stack direction="column" spacing={3}>
        <Timeline position="left">
          {articles.map((article) => {
            const {
              id,
              previewImageAlt,
              previewImageUrl,
              date: dateISO,
              titleNormalized,
              title,
            } = article;
            const date = new Date(dateISO);
            return (
              <TimeOutlinedList key={id} date={date}>
                <Paper elevation={2} sx={{ height: 200 }}>
                  <Grid container>
                    <Grid item xs={3}>
                      <Image
                        src={previewImageUrl}
                        alt={previewImageAlt}
                        maxHeight={190}
                        minHeight={190}
                        sx={{ borderRadius: 0.8, margin: 0.5 }}
                      />
                    </Grid>
                    <Grid item xs={9} sx={{ pl: 3 }}>
                      <Stack direction="column" alignItems="flex-start" sx={{ pt: 2 }}>
                        <Button variant="text" onClick={() => navigate(`${titleNormalized}`)}>
                          <Typography variant="h4" textAlign="left">
                            {title}
                          </Typography>
                        </Button>
                        <Typography variant="body2">{article.short}</Typography>
                        <Button
                          component={Link}
                          to={`/edytor/${titleNormalized}`}
                          sx={{ position: 'absolute', bottom: 10, right: 25 }}
                        >
                          Edytuj
                        </Button>
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
  );
};

export { ArticlesList };
