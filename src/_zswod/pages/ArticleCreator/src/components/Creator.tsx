import { Button, Stack } from '@mui/material';
import { FC, useState } from 'react';
import { ArticleFormContent } from '../models/ArticleFormContent';
import { ArticleForm } from './ArticleForm';
import { pick } from 'src/_zswod/utils/lodash';
import { ArticlePreview } from './ArticlePreview';
import { ArticleModel } from 'src/_zswod/models/Article';
import { ImageModel } from 'src/_zswod/models/Image';

const getGalleryTitle = (articleTitle: string) => `Galeria artykułu "${articleTitle}"`;

type CreatorProps = {
  article: ArticleModel;
  images: ImageModel[];
  titleNormalized?: string;
};
const Creator: FC<CreatorProps> = ({ article, images, titleNormalized }) => {
  const formId = 'article-form';

  const initialArticle = pick<ArticleFormContent>(article, 'content', 'short', 'title');

  const [articlePreviewOpen, setArticlePreviewOpen] = useState(false);
  const [articleFormContent, setArticleFormContent] = useState<ArticleFormContent>(initialArticle);
  const [imageFormContents, setImageFormContents] = useState<ImageModel[]>(images);
  const [galleryTitle, setGalleryTitle] = useState(getGalleryTitle(initialArticle.title));

  const handleContinue = (form: ArticleFormContent) => {
    setArticleFormContent(form);
    setArticlePreviewOpen(true);
    setGalleryTitle(`Galeria artykułu "${form.title}"`);
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
        titleNormalized={titleNormalized}
        galleryTitle={galleryTitle}
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
