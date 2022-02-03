import { Request, Response } from 'express';
import { imagesData } from './data';
import { ImageModel } from './models';

const getImages = (req: Request<void>, res: Response<ImageModel[]>) => {
  res.send(imagesData);
};

const getImage = (req: Request<{ imageId: number }>, res: Response<ImageModel>) => {
  const { imageId } = req.params;
  const image = imagesData.find((i) => Number(i.id) === Number(imageId));
  res.send(image);
};

export { getImage, getImages };
