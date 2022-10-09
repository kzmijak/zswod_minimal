import { Stack } from '@mui/material';
import { FC, useState } from 'react';
import { ArticleFormModel } from '../models/ArticleFormModel';
import { nullArticleFormObject } from '../models/nullArticleFormObject';
import { ArticleForm } from './ArticleForm';
import { ImageForm } from './ImageForm';

const Creator: FC = () => {
  const [articleFormContent, setArticleFormContent] =
    useState<ArticleFormModel>(nullArticleFormObject);

  const handleSubmitArticlesForm = (data: ArticleFormModel) => {
    console.log({ data });
    setArticleFormContent(data);
  };

  return (
    <Stack direction="column">
      <ArticleForm defaultValues={articleFormContent} onSubmit={handleSubmitArticlesForm} />
      {articleFormContent.images.map((image) => (
        <ImageForm key={image.name} />
      ))}
    </Stack>
  );
};

export { Creator };
