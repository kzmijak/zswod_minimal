type ArticleModel = {
  id: number;
  short: string;
  content: string;
  title: string;
  date: Date;
};

type AddArticleRequest = {
  title: string;
  short: string;
  content: string;
};

export type { ArticleModel, AddArticleRequest };
