import { Article } from '../models/Article/article';
import { ArticleResponse } from '../models/Article/articleResponse';
import { generateListMapper } from '../utils/generateListMapper';
import { ImagesMapper } from './imagesMapper';

const ResponseToModel = (response: ArticleResponse) =>
  ({
    content: response.content,
    date: response.date,
    id: response.id,
    images: ImagesMapper.ListResponseToModel(response.images),
    short: response.short,
    title: response.title,
  } as Article);

const ListResponseToModel = generateListMapper(ResponseToModel);

const ArticlesMapper = {
  ResponseToModel,
  ListResponseToModel,
};

export { ArticlesMapper };
