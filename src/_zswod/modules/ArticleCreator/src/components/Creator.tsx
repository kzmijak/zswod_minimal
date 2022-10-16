import { Button, Stack } from '@mui/material';
import { FC, useState } from 'react';
import { api } from 'src/_zswod/modules/Axios';
import { ArticleFormModel } from '../models/ArticleFormModel';
import { ImageFormModel } from '../models/ImageFormModel';
import { nullArticleFormObject } from '../models/nullArticleFormObject';
import { ArticleForm } from './ArticleForm';
import { ArticleImageDrop } from './controls/ArticleImageDrop';
import { ImageForm } from './ImageForm';

type PostArticleBody = {
  article: ArticleFormModel;
  images: ImageFormModel[];
};

const postArticle = async (data: PostArticleBody) => {
  const response = await api.post('/articles', data);
  return response.data;
};

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

  const handlePost = () => {
    postArticle({
      article: articleFormContent,
      images: imageFormModels,
    });
  };

  return (
    <Stack direction="column">
      <ArticleForm
        defaultValues={articleFormContent}
        onSubmit={(data) => {
          console.log({ data });
          setArticleFormContent(data);
        }}
        renderSubmit={<Button type="submit">Zatwierdź</Button>}
      />
      <ArticleImageDrop
        images={imageFormModels}
        onChange={(images) => setImageFormModels(images)}
      />
      {imageFormModels.map((imageFormModel, index) => (
        <ImageForm
          initialState={imageFormModel}
          key={index}
          onSubmit={(form) => {
            const copy = imageFormModels.slice();
            copy.splice(index, 1, form);
            setImageFormModels(copy);
          }}
        />
      ))}
      <Button onClick={handlePost}>Zatwierdź i wyślij</Button>
    </Stack>
  );
};

export { Creator };
