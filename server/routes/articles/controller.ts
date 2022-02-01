import { articlesData } from './data';
import { AddArticleRequest, ArticleModel } from './models';
import { Request, response, Response } from 'express';
import { nextAvailableId } from '../utils';

const getArticles = (req: Request<void>, res: Response<ArticleModel[]>) => {
  res.send(articlesData);
};

const getArticle = (req: Request<{ articleId: number }>, res: Response<ArticleModel>) => {
  const { articleId } = req.params;
  const article = articlesData.find((a) => Number(a.id) === Number(articleId));
  res.send(article);
};

const postArticle = (req: Request<AddArticleRequest>, res: Response<string>) => {
  const { content, short, title } = req.body as AddArticleRequest;

  try {
    const newArticle: ArticleModel = {
      id: nextAvailableId(articlesData),
      title,
      short,
      content,
      date: new Date(),
    };
    articlesData.push(newArticle);
  } catch {
    res.send('Nie udało się wykonać operacji');
  }

  res.send('Sukces');
};

export { getArticle, getArticles, postArticle };
