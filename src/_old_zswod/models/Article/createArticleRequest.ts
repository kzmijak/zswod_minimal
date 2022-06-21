type CreateArticleRequest = {
  title: string;
  short: string;
  content: string;
  images: ImageSubrequest[];
};

type ImageSubrequest = {
  title: string;
  image: string;
  order: number;
  alt: string;
};

export type { CreateArticleRequest, ImageSubrequest };
