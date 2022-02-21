import { FC, useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import { Container, Typography } from '@mui/material';
import Page from '../../../components/Page';
import { useNavigate, useParams } from 'react-router';
import Page404 from 'src/pages/Page404';
import { Article } from 'src/_zswod/models/Article/article';
import { useArticlesContext } from 'src/_zswod/hooks/useArticlesContext';
import { MotionContainer } from 'src/components/animate';
import { ArticlePreviewDialog } from './PreviewDialogs/ArticlePreviewDialog';
import { ContentForm } from './ContentForm';
import { ErrorSnackbar } from './controls/ErrorSnackbar';
import { SendButton } from './controls/SendButton';
import { ImageNav } from './ImageNav';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Image } from 'src/_zswod/models/Image/image';
import { GalleryPreviewDialog } from './PreviewDialogs/GalleryPreviewDialog';
import ForwardIcon from '@mui/icons-material/Forward';

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
  const { getArticle, loadArticle, isLoading, isLoaded } = useArticlesContext();

  if (articleId === undefined) {
    return <EditorView />;
  }

  if (isNaN(Number(articleId))) return <Page404 />;

  if (!isLoaded()) {
    loadArticle(Number(articleId));
  }

  if (isLoading()) {
    return null;
  }

  const article = getArticle(Number(articleId));

  if (!Boolean(article)) return <Page404 />;

  return <EditorView article={article!} />;
};

type ContentState = {
  title: string;
  short: string;
  content: string;
  images: Image[];
};

const EditorView: FC<{ article?: Article }> = ({ article }) => {
  const schema = yup.object().shape({
    title: yup
      .string()
      .required('Tytuł jest wymagany.')
      .min(4, 'Minimalnie 8 znaków')
      .max(35, 'Maksymalnie 35 znaków.'),
    short: yup
      .string()
      .required('Zapowiedź jest wymagana')
      .min(8, 'Minimum 8 znaków')
      .max(100, 'Maksymalnie 100 znaków'),
    content: yup
      .string()
      .required('Treść nie może być pusta')
      .min(30, 'Treść musi zawierać przynajmniej 30 znaków'),
    images: yup
      .mixed()
      .required('Minimalnie jedno zdjęcie jest wymagane.')
      .test(
        'files amount',
        'Minimalnie jeden plik wymagany.',
        (value) => value && value.length > 0
      ),
  });

  const [articlePreviewOpen, setArticlePreviewOpen] = useState(false);
  const [galleryPreviewOpen, setGalleryPreviewOpen] = useState(false);

  const onGoToArticle = () => {
    setGalleryPreviewOpen(false);
    setArticlePreviewOpen(true);
  };

  const onGoToGallery = () => {
    setArticlePreviewOpen(false);
    setGalleryPreviewOpen(true);
  };

  const closeArticlePreview = () => {
    setArticlePreviewOpen(false);
  };

  const initialArticle = {
    title: article?.title ?? '',
    short: article?.short ?? '',
    content: article?.content ?? '',
    images: article?.images ?? [],
  };
  const { register, watch, setValue, formState, control, handleSubmit } = useForm<ContentState>({
    defaultValues: initialArticle,
    mode: 'onTouched',
    resolver: yupResolver(schema),
  });

  const submitClicked = (values: ContentState) => {
    setArticlePreviewOpen(true);
    // reset();
  };

  return (
    <MotionContainer>
      <RootStyle title="Components: Editor | Minimal-UI">
        <form onSubmit={handleSubmit(submitClicked)}>
          <Container maxWidth="xl">
            <Typography variant="h3" textAlign="center" sx={{ mb: 3 }}>
              {article ? `Edycja artykułu: ${article.title}` : 'Dodawanie nowego artykułu'}
            </Typography>

            <ContentForm
              control={control}
              formState={formState}
              register={register}
              watch={watch}
            />

            <SendButton
              tooltipOpen={
                !articlePreviewOpen &&
                !galleryPreviewOpen &&
                watch().images?.length > 0 &&
                formState.isValid
              }
              tooltip="Możesz już przejść do następnego etapu"
              icon={<ForwardIcon />}
            />
          </Container>

          <ErrorSnackbar message={formState.errors.content?.message} />

          <ImageNav control={control} register={register} setValue={setValue} watch={watch} />
        </form>
        {watch().images?.length > 0 && (
          <>
            <ArticlePreviewDialog
              open={articlePreviewOpen}
              content={watch()}
              onClose={() => closeArticlePreview()}
              onGoToGallery={() => onGoToGallery()}
            />
            <GalleryPreviewDialog
              content={watch()}
              onClose={() => onGoToArticle()}
              onGoToArticle={() => onGoToArticle()}
              open={galleryPreviewOpen}
              setValue={setValue}
            />
          </>
        )}
      </RootStyle>
    </MotionContainer>
  );
};

export { EditorGuarded as Editor };
export type { ContentState, InvalidFields };
