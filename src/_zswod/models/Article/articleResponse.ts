import { ImageResponse } from '../Image/imageResponse';

type ArticleResponse = {
  id: number;
  title: string;
  short: string;
  content: string;
  date: Date;
  images: ImageResponse[];
};

export type { ArticleResponse };
