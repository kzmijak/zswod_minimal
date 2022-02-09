import { FC, useState } from 'react';
import { styled } from '@mui/material/styles';
import { Container, Typography } from '@mui/material';
import Page from '../../../components/Page';
import { useParams } from 'react-router';
import Page404 from 'src/pages/Page404';
import { Article } from 'src/_zswod/models/article';
import { useArticlesContext } from 'src/_zswod/hooks/useArticlesContext';
import { MotionContainer } from 'src/components/animate';
import { PreviewDialog } from './PreviewDialog';
import { ContentForm } from './ContentForm';
import { ErrorSnackbar } from './controls/ErrorSnackbar';
import { SendButton } from './controls/SendButton';
import { ImageNav } from './ImageNav';
import { useForm } from 'react-hook-form';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  paddingTop: theme.spacing(11),
  paddingBottom: theme.spacing(15),
}));

// ----------------------------------------------------------------------

type InvalidFields = 'title' | 'short' | 'content' | 'images';

// ----------------------------------------------------------------------

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

type ContentState = {
  title: string;
  short: string;
  content: string;
  images: (string | File)[];
};

const EditorView: FC<{ article?: Article }> = ({ article }) => {
  const [errorSnackbarOpen, setErrorSnackbarOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const { getArticleGallery } = useArticlesContext();
  const initialImages = article ? getArticleGallery(article!.id).map((i) => i.uri) : [];
  const initialArticle = {
    title: article?.title ?? '',
    short: article?.short ?? '',
    content: article?.content ?? '',
    images: initialImages,
  };
  const { register, watch, setValue, formState } = useForm<ContentState>({
    defaultValues: initialArticle,
  });

  const submitClicked = () => {
    // console.log(watch());
    console.log(formState.errors.title);
    formState.isValid ? setDialogOpen(true) : setErrorSnackbarOpen(true);
  };

  return (
    <MotionContainer>
      <RootStyle title="Components: Editor | Minimal-UI">
        <Container maxWidth="xl">
          <Typography variant="h3" textAlign="center" sx={{ mb: 3 }}>
            {article ? `Edycja artykułu: ${article.title}` : 'Dodawanie nowego artykułu'}
          </Typography>

          <ContentForm
            formState={formState}
            register={register}
            setValue={setValue}
            watch={watch}
          />

          <SendButton onClick={() => submitClicked()} />
        </Container>

        <ErrorSnackbar open={errorSnackbarOpen} />

        <ImageNav register={register} setValue={setValue} watch={watch} />

        <PreviewDialog open={dialogOpen} content={watch()} onClose={() => setDialogOpen(false)} />
      </RootStyle>
    </MotionContainer>
  );
};

export { EditorGuarded as Editor };
export type { ContentState, InvalidFields };
