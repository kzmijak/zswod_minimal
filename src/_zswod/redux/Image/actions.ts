import { AppDispatch } from '../store';
import { slice } from './reducer';
import axios from 'axios';
import { HOST_API } from 'src/_zswod/config';
import { Image } from 'src/_zswod/models/Image/image';
import { ImageResponse } from 'src/_zswod/models/Image/imageResponse';

const asyncGetImagesAction = () => async (dispatch: AppDispatch) => {
  dispatch(slice.actions.startLoading());
  try {
    const response = await axios.get<ImageResponse[]>(`${HOST_API}/images`);

    let images: Image[] = response.data.map((i: ImageResponse) => ({
      alt: i.alt,
      title: i.title,
      uri: `data:image;base64,${i.blob}`,
      articleId: i.articleId,
      id: i.id,
      order: i.order,
    }));

    dispatch(slice.actions.getImagesSuccess(images));
  } catch (error) {
    dispatch(slice.actions.hasError(error as string));
  }
};

export { asyncGetImagesAction };
