import { Button, Stack } from '@mui/material';
import { FC, useState } from 'react';
import { api } from 'src/_zswod/modules/Axios';
import { useCurrentArticle } from 'src/_zswod/modules/CurrentArticle';
import { ArticleFormModel } from '../models/ArticleFormModel';
import { ImageFormModel } from '../models/ImageFormModel';
import { ArticleForm } from './ArticleForm';
import { arrayPick, pick } from 'src/_zswod/utils/lodash';

type PostArticleBody = {
  article: ArticleFormModel;
  images: ImageFormModel[];
};

const postArticle = async (data: PostArticleBody) => {
  const response = await api.post('/articles', data);
  return response.data;
};

const Creator: FC = () => {
  const { article, images } = useCurrentArticle();
  const initialArticle = pick<ArticleFormModel>(article, 'content', 'short', 'title');
  const initialImages = arrayPick<ImageFormModel>(images, 'title', 'alt', 'url');

  const [articleFormContent, setArticleFormContent] = useState<ArticleFormModel>(initialArticle);
  const [imageFormModels, setImageFormModels] = useState<ImageFormModel[]>(initialImages);

  const handlePost = () => {
    postArticle({
      article: articleFormContent,
      images: imageFormModels,
    });
  };

  return (
    <Stack direction="column" height="100vh">
      <ArticleForm
        defaultValues={articleFormContent}
        onSubmit={(data) => {
          console.log({ data });
          setArticleFormContent(data);
        }}
        renderSubmit={<Button type="submit">Zatwierdź</Button>}
      />
      {/* <ArticleImageDrop
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
      <Button onClick={handlePost}>Zatwierdź i wyślij</Button> */}
    </Stack>
  );
};

export { Creator };
