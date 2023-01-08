import { styled } from '@mui/material/styles';
import { FC, useState } from 'react';
import { HomeArticles } from './HomeArticles';
import { HomeContact } from './HomeContact';
import { HomeGallery } from './HomeGallery';
import { HomeHero } from './HomeHero';
import { HomeShortcuts } from './HomeShortcuts';

const RootStyle = styled('div')(() => ({
  height: '100%',
  scrollbarWidth: 'none',
}));

const ContentStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: theme.palette.background.default,
}));

const Landing: FC = () => {
  const [articlesRef, setArticlesRef] = useState(null);
  const [galleryRef, setGalleryRef] = useState(null);
  const [contactRef, setContactRef] = useState(null);

  return (
    <RootStyle>
      <HomeHero />
      <ContentStyle>
        <HomeShortcuts articlesRef={articlesRef} galleryRef={galleryRef} contactRef={contactRef} />
        <HomeArticles passRef={setArticlesRef} />
        <HomeGallery passRef={setGalleryRef} />
        <HomeContact passRef={setContactRef} />
      </ContentStyle>
    </RootStyle>
  );
};

export { Landing };
