import { Image } from '../Image/image';

type Article = {
  id: number;
  short: string;
  content: string;
  title: string;
  date: Date;
  images: Image[];
};

export type { Article };
