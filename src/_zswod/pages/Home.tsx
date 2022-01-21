// @mui
import { styled } from '@mui/material/styles';
// components
import Page from 'src/components/Page';
// sections
import {
  HomeDarkMode,
  HomeLookingFor,
  HomePricingPlans,
  HomeAdvertisement,
  HomeCleanInterfaces,
  HomeHugePackElements,
} from 'src/sections/home';
import { HomeColorPresets, HomeHero, HomeMinimal } from '../sections/home';

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
  return (
    <Page title="The starting point for your next project">
      <RootStyle>
        <HomeHero />
        <ContentStyle>
          <HomeMinimal />
          <HomeColorPresets />
          <HomeHugePackElements />

          <HomeDarkMode />

          <HomeCleanInterfaces />

          <HomePricingPlans />

          <HomeLookingFor />

          <HomeAdvertisement />
        </ContentStyle>
      </RootStyle>
    </Page>
  );
}
