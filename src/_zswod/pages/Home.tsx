// @mui
import { styled } from '@mui/material/styles';
import { useState } from 'react';
// components
import Page from 'src/components/Page';
// sections
import { HomeHero, HomeShortcuts, HomeArticles, HomeGallery, HomeContact } from '../sections/home';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  height: '100%',
  scrollbarWidth: 'none',
}));

const ContentStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: theme.palette.background.default,
}));

// ----------------------------------------------------------------------

export default function HomePage() {
  const [articlesRef, setArticlesRef] = useState(null);
  const [galleryRef, setGalleryRef] = useState(null);
  const [contactRef, setContactRef] = useState(null);

  return (
    <Page title="The starting point for your next project">
      <RootStyle>
        <HomeHero />
        <ContentStyle>
          <HomeShortcuts
            articlesRef={articlesRef}
            galleryRef={galleryRef}
            contactRef={contactRef}
          />
          <HomeArticles passRef={setArticlesRef} />
          <HomeGallery passRef={setGalleryRef} />
          <HomeContact passRef={setContactRef} />
        </ContentStyle>
      </RootStyle>
    </Page>
  );
}
