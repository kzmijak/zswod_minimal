import { Container, Typography, Stack, Fab, Paper, Grid, Button } from '@mui/material';
import { Timeline } from '@mui/lab';
import { FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TimeOutlinedList } from 'src/_zswod/components/TimeOutlinedList';
import {
  getArticleHeaderPreviewImage,
  selectAllArticleHeaders,
  selectArticleHeadersStatus,
} from 'src/_zswod/modules/ArticleHeaders';
import { Blob } from 'src/_zswod/modules/Blob';

const ArticlesList: FC = () => {
  const navigate = useNavigate();

  const articleHeaders = useSelector(selectAllArticleHeaders);
  const { status } = useSelector(selectArticleHeadersStatus);

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
          {articleHeaders.map((article) => {
            const { id, short, uploadDate: uploadDateISO, titleNormalized, title } = article;
            const previewImage = getArticleHeaderPreviewImage(article, { onEmpty: 'nullObject' })!;
            const uploadDate = new Date(uploadDateISO);
            return (
              <TimeOutlinedList key={id} date={uploadDate}>
                <Paper elevation={2} sx={{ height: 200 }}>
                  <Grid container>
                    <Grid item xs={3}>
                      <Blob
                        id={previewImage.blobId}
                        alt={previewImage.alt}
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
                        <Typography variant="body2">{short}</Typography>
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
