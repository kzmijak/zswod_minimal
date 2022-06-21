import { Image } from '../models/Image/image';
import { ImageResponse } from '../models/Image/imageResponse';
import { generateListMapper } from '../utils/generateListMapper';
const ResponseToModel = (response: ImageResponse) =>
  ({
    alt: response.alt,
    articleId: response.articleId,
    id: response.id,
    order: response.order,
    title: response.title,
    uri: `data:image;base64,${response.blob}`,
  } as Image);

const ListResponseToModel = generateListMapper(ResponseToModel);

const ImagesMapper = {
  ResponseToModel,
  ListResponseToModel,
};

export { ImagesMapper };
