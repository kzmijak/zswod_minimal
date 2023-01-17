import { Button, Stack } from '@mui/material';
import { FC, useState } from 'react';
import { useCurrentArticle } from 'src/_zswod/modules/CurrentArticle';
import { ArticleFormContent } from '../models/ArticleFormContent';
import { ImageFormContent } from '../models/ImageFormContent';
import { ArticleForm } from './ArticleForm';
import { arrayPick, pick } from 'src/_zswod/utils/lodash';
import { ArticlePreview } from './ArticlePreview';

const Creator: FC = () => {
  const { article } = useCurrentArticle();
  const { images } = useCurrentArticle();
  const formId = 'article-form';
  const initialArticle = pick<ArticleFormContent>(article, 'content', 'short', 'title');
  const initialImages = arrayPick<ImageFormContent>(images, 'title', 'alt', 'url');

  const [articlePreviewOpen, setArticlePreviewOpen] = useState(false);
  const [articleFormContent, setArticleFormContent] = useState<ArticleFormContent>(initialArticle);
  const [imageFormContents, setImageFormContents] = useState<ImageFormContent[]>(initialImages);

  const handleContinue = (form: ArticleFormContent) => {
    setArticleFormContent(form);
    setArticlePreviewOpen(true);
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
      />
    </>
  );
};

export { Creator };
