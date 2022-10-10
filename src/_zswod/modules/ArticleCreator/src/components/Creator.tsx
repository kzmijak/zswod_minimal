import { Stack } from '@mui/material';
import { FC, useState } from 'react';
import { ArticleFormModel } from '../models/ArticleFormModel';
import { ImageFormModel } from '../models/ImageFormModel';
import { nullArticleFormObject } from '../models/nullArticleFormObject';
import { ArticleForm } from './ArticleForm';
import { ArticleImageDrop } from './controls/ArticleImageDrop';
import { ImageForm } from './ImageForm';

type CreatorProps = {
  articleInitialState?: ArticleFormModel;
  imageInitialStates?: ImageFormModel[];
};

const Creator: FC<CreatorProps> = ({
  articleInitialState = nullArticleFormObject,
  imageInitialStates = [],
}) => {
  const [articleFormContent, setArticleFormContent] =
    useState<ArticleFormModel>(articleInitialState);
  const [imageFormModels, setImageFormModels] = useState<ImageFormModel[]>(imageInitialStates);

  const handleSubmitArticlesForm = (data: ArticleFormModel) => {
    setArticleFormContent(data);
  };

  return (
    <Stack direction="column">
      <ArticleForm defaultValues={articleFormContent} onSubmit={handleSubmitArticlesForm} />
      <ArticleImageDrop
        images={imageFormModels}
        onChange={(images) => setImageFormModels(images)}
      />
      {imageFormModels.map((imageFormModel, index) => (
        <ImageForm initialState={imageFormModel} key={index} />
      ))}
    </Stack>
  );
};

export { Creator };
