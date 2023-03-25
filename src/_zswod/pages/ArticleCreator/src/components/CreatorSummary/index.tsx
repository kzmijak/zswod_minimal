import { Stack } from '@mui/material';
import { FC } from 'react';
import { ImageModel } from 'src/_zswod/models/Image';
import { ArticleFormContent } from '../../models/ArticleFormContent';
import { PublishButton } from './PublishButton';
import { TodoList } from './TodoList';

type CreatorSummaryProps = {
  titleNormalized: string | undefined;
  articleFormContent: ArticleFormContent;
  images: ImageModel[];
  galleryTitle: string;
};
const CreatorSummary: FC<CreatorSummaryProps> = ({
  articleFormContent,
  galleryTitle,
  images,
  titleNormalized,
}) => (
  <Stack padding={2} spacing={2}>
    <TodoList />
    <PublishButton
      articleFormContent={articleFormContent}
      galleryTitle={galleryTitle}
      images={images}
      titleNormalized={titleNormalized}
    />
  </Stack>
);

export { CreatorSummary };
