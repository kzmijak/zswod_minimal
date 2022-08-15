import { FC } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { Page } from 'src/_zswod/components/Page';
import { FetchArticle } from 'src/_zswod/modules/Article/src/components/FetchArticle';
import { selectCurrentArticle } from 'src/_zswod/modules/Article/src/slice/selectors';
import { PATHS_ABOUT } from 'src/_zswod/routes/src/menu.paths';
import { Gallery } from '../components/Gallery';

const GalleryView: FC = () => {
  const { articleTitle } = useParams();
  const navigate = useNavigate();

  const article = useSelector(selectCurrentArticle);

  if (!Boolean(articleTitle)) navigate(PATHS_ABOUT.galeria.link);

  return (
    <Page>
      <FetchArticle articleTitle={articleTitle!}>
        <Gallery articleMeta={article} />
      </FetchArticle>
    </Page>
  );
};

export { GalleryView };
