import { AppDispatch } from '../store';
import { slice } from './reducer';
import axios from 'axios';
import { HOST_API } from 'src/_zswod/config';
import { Image } from 'src/_zswod/models/image';

type ImageResponse = {
  id: number;
  articleId: number;
  order: number;
  blob: string;
  alt: string;
};

const asyncGetImagesAction = () => async (dispatch: AppDispatch) => {
  dispatch(slice.actions.startLoading());
  try {
    const response = await axios.get<ImageResponse[]>(`${HOST_API}/images`);

    console.log(response.data);
    let images: Image[] = response.data.map((i: ImageResponse) => {
      console.log(new Blob([i.blob], { type: 'image/png' }));

      return {
        alt: i.alt,
        uri: `data:image/jpeg;base64,${i.blob}`,
        articleId: i.articleId,
        id: i.id,
        order: i.order,
      };
    });
    console.log(images);

    dispatch(slice.actions.getImagesSuccess(images));
  } catch (error) {
    dispatch(slice.actions.hasError(error as string));
  }
};

export { asyncGetImagesAction };
