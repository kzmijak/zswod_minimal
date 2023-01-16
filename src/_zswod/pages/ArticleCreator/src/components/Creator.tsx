import { Button, Stack } from '@mui/material';
import { FC, useState } from 'react';
import { api } from 'src/_zswod/modules/Axios';
import { useCurrentArticle } from 'src/_zswod/modules/CurrentArticle';
import { ArticleFormContent } from '../models/ArticleFormContent';
import { ImageFormContent } from '../models/ImageFormContent';
import { ArticleForm } from './ArticleForm';
import { arrayPick, pick } from 'src/_zswod/utils/lodash';
import { ArticlePreview } from './ArticlePreview';

type PostArticleBody = {
  article: ArticleFormContent;
  images: ImageFormContent[];
};

const postArticle = async (data: PostArticleBody) => {
  const response = await api.post('/articles', data);
  return response.data;
};

const Creator: FC = () => {
  const { article } = useCurrentArticle();
  const formId = 'article-form';
  const initialArticle = pick<ArticleFormContent>(article, 'content', 'short', 'title');

  const [articlePreviewOpen, setArticlePreviewOpen] = useState(false);
  const [articleFormContent, setArticleFormContent] = useState<ArticleFormContent>(initialArticle);

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
        open={articlePreviewOpen}
        onClose={() => setArticlePreviewOpen(false)}
        article={articleFormContent}
      />
    </>
  );
};

export { Creator };
