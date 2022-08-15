import { Button, Paper, TextField } from '@mui/material';
import { FC, useState } from 'react';
import { api } from 'src/_zswod/modules/Axios';
import { ImageDrop, ImageFile } from 'src/_zswod/modules/ImageDrop';

const publishImage = async (string64: string) => {
  const response = await api.post<{ imageGuid: string }>('images', {
    image: string64,
    contentType: 'image/png',
  });

  return response.data.imageGuid;
};

type PublishArticleBody = {
  title: string;
  short: string;
  content: string;
  images: {
    imageGuid: string;
    imageName: string;
    imageAlt: string;
    isPreview: boolean;
  }[];
};

const publishArticle = async (body: PublishArticleBody) => {
  const response = await api.post('articles', body);
  return response.data;
};

type CreatorFormProps = {};

const CreatorForm: FC<CreatorFormProps> = ({}) => {
  const [title, setTitle] = useState('');
  const [short, setShort] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');

  const set = (setter: (value: string) => void) => (e: any) => {
    setter(e.target.value);
  };

  const handleSubmit = async () => {
    const imageGuid = await publishImage(image);

    const body = {
      content,
      short,
      title,
      images: [
        {
          imageGuid,
          imageName: 'dolor sit amet',
          imageAlt: 'lorem ipsum',
          isPreview: true,
        },
      ],
    };

    const article = await publishArticle(body);

    console.log({ article });
  };

  const [images, setImages] = useState<ImageFile[]>([]);

  return (
    <Paper component="form">
      <TextField label="Tytuł" value={title} onChange={set(setTitle)} />
      <TextField label="Skrót" value={short} onChange={set(setShort)} />
      <TextField label="Zawartość" value={content} onChange={set(setContent)} />
      <TextField label="Obraz" value={image} onChange={set(setImage)} />
      <ImageDrop
        images={images}
        onDropAccepted={(image) => {
          setImages(image);
        }}
      />
      <Button onClick={handleSubmit}>Zatwierdź</Button>
    </Paper>
  );
};

export { CreatorForm };
