import { Article } from '../models/Article/article';
import { ArticleResponse } from '../models/Article/articleResponse';
import { generateListMapper } from '../utils/generateListMapper';
import { ImagesMapper } from './imagesMapper';
import { Mapper } from './mapper';

const ResponseToModel = (response: ArticleResponse) =>
  ({
    content: response.content,
    date: new Date(response.date),
    id: response.id,
    images: ImagesMapper.ListResponseToModel(response.images),
    short: response.short,
    title: response.title,
  } as Article);

const ListResponseToModel = generateListMapper(ResponseToModel);

const ArticlesMapper: Mapper<ArticleResponse, Article> = {
  ResponseToModel,
  ListResponseToModel,
};

export { ArticlesMapper };
