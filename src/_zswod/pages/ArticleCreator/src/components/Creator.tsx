import { Alert, Button, Grow, Stack, Tooltip } from '@mui/material';
import { FC, useMemo, useState } from 'react';
import { ArticleFormContent } from '../models/ArticleFormContent';
import { ImageFormContent } from '../models/ImageFormContent';
import { ArticleForm } from './ArticleForm';
import { arrayPick, pick } from 'src/_zswod/utils/lodash';
import { ArticlePreview } from './ArticlePreview';
import { RequestStatus } from 'src/_zswod/utils/requestStatus';
import { LoadingButton } from '@mui/lab';
import { createArticle, getCreateArticleError } from '../api/createArticle';
import { ArticleModel } from 'src/_zswod/models/Article';
import { ImageModel } from 'src/_zswod/models/Image';
import { updateArticle } from '../api/updateArticle';

type CreatorProps = {
  article: ArticleModel;
  images: ImageModel[];
  titleNormalized?: string;
};
const Creator: FC<CreatorProps> = ({ article, images, titleNormalized }) => {
  const isEditMode = Boolean(titleNormalized);

  const formId = 'article-form';

  const initialArticle = pick<ArticleFormContent>(article, 'content', 'short', 'title');
  const initialImages = arrayPick<ImageFormContent>(images, 'title', 'alt', 'url');

  const [status, setStatus] = useState<RequestStatus>('idle');
  const [error, setError] = useState('');

  const [articlePreviewOpen, setArticlePreviewOpen] = useState(false);
  const [articleFormContent, setArticleFormContent] = useState<ArticleFormContent>(initialArticle);
  const [imageFormContents, setImageFormContents] = useState<ImageFormContent[]>(initialImages);

  const hasImages = useMemo(() => imageFormContents.length > 0, [imageFormContents.length]);

  const handleContinue = (form: ArticleFormContent) => {
    setArticleFormContent(form);
    setArticlePreviewOpen(true);
  };

  const handlePublish = async () => {
    setStatus('loading');
    try {
      await (isEditMode
        ? updateArticle(titleNormalized!, articleFormContent, imageFormContents)
        : createArticle(articleFormContent, imageFormContents));
      setStatus('success');
    } catch (err) {
      setError(getCreateArticleError(err));
      setStatus('error');
    }
  };

  return (
    <>
      <Stack direction="column" height="100vh">
        <ArticleForm formId={formId} defaultValues={articleFormContent} onSubmit={handleContinue} />
        <Stack direction="row" justifyContent="space-between" margin={2}>
          <Button variant="contained">Powrót do Panelu</Button>
          <Button variant="contained" type="submit" form={formId}>
            Kontynuuj
          </Button>
        </Stack>
      </Stack>
      <ArticlePreview
        images={imageFormContents}
        onImagesChange={setImageFormContents}
        open={articlePreviewOpen}
        onClose={() => setArticlePreviewOpen(false)}
        article={articleFormContent}
      >
        <Tooltip
          title={
            !hasImages && 'Przed opublikowaniem artykułu należy załączyć minimalnie jeden obraz'
          }
        >
          <Stack minWidth="100%">
            <LoadingButton
              loading={status === 'loading'}
              disabled={!hasImages}
              variant="contained"
              onClick={handlePublish}
            >
              Opublikuj
            </LoadingButton>
          </Stack>
        </Tooltip>
        {status === 'error' && (
          <Grow in>
            <Alert severity="error">{error}</Alert>
          </Grow>
        )}
      </ArticlePreview>
    </>
  );
};

export { Creator };
