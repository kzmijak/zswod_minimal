import { Typography } from '@mui/material';
import { FC } from 'react';
import { useNavigate, useParams } from 'react-router';
import { Page } from 'src/_zswod/components/Page';
import { PATHS_ABOUT } from 'src/_zswod/routes/src/menu.paths';
import { ArticleContent } from '../components/ArticleContent';
import { FetchArticle } from '../components/FetchArticle';

const ArticleView: FC = () => {
  const { title } = useParams();
  const navigate = useNavigate();

  if (!Boolean(title)) navigate(PATHS_ABOUT.nowosci.link);

  return (
    <>
      <FetchArticle articleTitle={title!} />
      <Page title="Nowości">
        <ArticleContent />
      </Page>
    </>
  );
};

export { ArticleView };
