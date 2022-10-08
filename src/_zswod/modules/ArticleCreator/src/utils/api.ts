import { api } from 'src/_zswod/modules/Axios';

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

const publishImage = async (string64: string) => {
  const response = await api.post<{ imageGuid: string }>('images', {
    image: string64,
    contentType: 'image/png',
  });

  return response.data.imageGuid;
};

const publishArticle = async (body: PublishArticleBody) => {
  const response = await api.post('articles', body);
  return response.data;
};

export { publishArticle, publishImage };
