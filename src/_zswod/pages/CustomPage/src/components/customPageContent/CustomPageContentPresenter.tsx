import { FC } from 'react';
import { Markdown } from 'src/_zswod/components/Markdown';

type CustomPagePresenterProps = { content: string };

const CustomPageContentPresenter: FC<CustomPagePresenterProps> = ({ content }) => (
  <Markdown>{content}</Markdown>
);

export { CustomPageContentPresenter };
