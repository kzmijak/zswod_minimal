import { FC, useState } from 'react';
import SendIcon from '@mui/icons-material/Send'; // material
import { styled } from '@mui/material/styles';
import {
  Container,
  Typography,
  Paper,
  Fab,
  TextField,
  Grid,
  Box,
  Snackbar,
  Alert,
} from '@mui/material';
// routes
// components
import Page from '../../../components/Page';
import QuillEditor from 'src/_zswod/components/editor/quill';
import Markdown from 'src/_zswod/components/Markdown';
import { useParams } from 'react-router';
import Page404 from 'src/pages/Page404';
import { Article } from 'src/_zswod/models/article';
import { useArticlesContext } from 'src/_zswod/hooks/useArticlesContext';
import { ImageNav } from './imageNav';
import { m } from 'framer-motion';
import { MotionContainer } from 'src/components/animate';
import { PreviewDialog } from './PreviewDialog';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  paddingTop: theme.spacing(11),
  paddingBottom: theme.spacing(15),
}));

// ----------------------------------------------------------------------

const imagesPicker = {
  minimized: { height: 85, transition: { duration: 0.2 } },
  maximized: { height: 'unset', transition: { duration: 0.17 } },
};

const minimizeFab = {
  minimized: { rigth: 120, transition: { duration: 0.17 } },
  maximized: { right: 50, transition: { duration: 0.17 } },
};

const EditorGuarded: FC = () => {
  const { articleId } = useParams();
  const { getArticle } = useArticlesContext();

  if (articleId === undefined) {
    return <EditorView />;
  }

  if (isNaN(Number(articleId))) return <Page404 />;

  const article = getArticle(Number(articleId));

  if (article === undefined) return <Page404 />;

  return <EditorView article={article} />;
};

type InvalidFields = 'title' | 'short' | 'content' | 'image';

const EditorView: FC<{ article?: Article }> = ({ article }) => {
  const [quillFull, setQuillFull] = useState(article?.content || '');
  const [minimized, setMinimized] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [title, setTitle] = useState(article?.title ?? '');
  const [short, setShort] = useState(article?.short ?? '');
  const [errors, setErrors] = useState<InvalidFields[]>([]);

  const checkForErrors = () => {
    let seeker: InvalidFields[] = [];

    if (title.length === 0) seeker.push('title');
    if (short.length === 0) seeker.push('short');
    if (quillFull.length === 0) seeker.push('content');
    if (files.length === 0) seeker.push('image');

    setErrors(seeker);
    return seeker;
  };

  const hasError = (field: InvalidFields) => errors.includes(field);
  const submitClicked = () => {
    const seekerResult = checkForErrors();
    if (seekerResult.length === 0) setDialogOpen(true);
  };

  const handleChange = (setter: Function) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setter(event.target.value);
  };

  const { getArticleGallery } = useArticlesContext();
  const initFiles = article ? getArticleGallery(article!.id).map((i) => i.uri) : [];

  const [files, setFiles] = useState<(File | string)[]>(initFiles);
  const header = article ? `Edycja artykułu: ${article.title}` : 'Dodawanie nowego artykułu';

  const getResultArticle = () => ({
    title,
    short,
    content: quillFull,
  });

  return (
    <MotionContainer>
      <RootStyle title="Components: Editor | Minimal-UI">
        <Container maxWidth="xl">
          <Typography variant="h3" textAlign="center" sx={{ mb: 3 }}>
            {header}
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={4}>
              <TextField
                error={hasError('title')}
                fullWidth
                required
                label="Tytuł"
                value={title}
                onChange={handleChange(setTitle)}
              />
            </Grid>
            <Grid item xs={8}>
              <TextField
                error={hasError('short')}
                fullWidth
                required
                label="Zapowiedź"
                value={short}
                onChange={handleChange(setShort)}
              />
            </Grid>

            <Grid item xs={6}>
              <QuillEditor
                error={hasError('content')}
                id="full-editor"
                value={quillFull}
                onChange={(value) => setQuillFull(value)}
                sx={{ minHeight: 800 }}
              />
            </Grid>
            <Grid item xs={6}>
              <Box sx={{ minHeight: 800 }}>
                <Typography variant="h5" sx={{ mb: 5 }}>
                  Podgląd
                </Typography>

                <Paper variant="outlined" sx={{ minHeight: 730, padding: 3 }}>
                  <Markdown children={quillFull} />
                </Paper>
              </Box>
            </Grid>

            <Fab
              sx={{ position: 'fixed', bottom: 50, right: 50, width: 60, height: 60, zIndex: 15 }}
            >
              <SendIcon onClick={() => submitClicked()} sx={{ height: 25, width: 25 }} />
            </Fab>
          </Grid>
        </Container>

        <Snackbar open={errors.length > 0} autoHideDuration={500}>
          <Alert variant="filled" severity="error">
            Artykuł musi zawierać tytuł, zapowiedź, minimalnie jedno zdjęcie oraz treść.
          </Alert>
        </Snackbar>

        <m.div
          initial={{
            width: '100%',
            position: 'fixed',
            textAlign: 'center',
            bottom: 0,
            maxHeight: 650,
          }}
          variants={imagesPicker}
          animate={minimized ? 'minimized' : 'maximized'}
        >
          <m.div
            initial={{
              position: 'absolute',
              top: -25,
              width: 60,
              height: 60,
              zIndex: 15,
              right: 120,
            }}
            variants={minimizeFab}
            animate={minimized ? '' : 'maximized'}
          >
            <Fab
              onClick={() => {
                setMinimized(!minimized);
                console.log(minimized);
              }}
            >
              {'_'}
            </Fab>
          </m.div>
          <ImageNav files={files} setFiles={setFiles} />
        </m.div>

        <PreviewDialog
          open={dialogOpen}
          article={getResultArticle()}
          images={files}
          onClose={() => setDialogOpen(false)}
        />
      </RootStyle>
    </MotionContainer>
  );
};

export { EditorGuarded as Editor };
