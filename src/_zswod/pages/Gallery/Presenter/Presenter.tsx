import { Container } from '@mui/material';
import { FC } from 'react';
import { CarouselThumbnail } from './CarouselThumbnail';

const Presenter: FC<{ articleId: number }> = ({ articleId }) => (
  <Container>
    <CarouselThumbnail articleId={articleId} />
  </Container>
);

export { Presenter };
