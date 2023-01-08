import { m } from 'framer-motion';
import { styled } from '@mui/material/styles';
import { Box, Link, Container, Typography, Stack, StackProps } from '@mui/material';
import Image from 'src/components/Image';
import { MotionContainer, varFade } from 'src/components/animate';
import useSettings from 'src/hooks/useSettings';
import { ButtonEPanel } from 'src/_zswod/components/ButtonEPanel';
import { FC } from 'react';
import { TextIconLabel } from 'src/_zswod/components/TextIconLabel';

const RootStyle = styled(m.div)(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.grey[400],
  [theme.breakpoints.up('md')]: {
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    display: 'flex',
    position: 'fixed',
    alignItems: 'center',
  },
}));

const ContentStyle = styled((props: StackProps) => <Stack spacing={5} {...props} />)(
  ({ theme }) => ({
    zIndex: 10,
    margin: 'auto',
    maxWidth: 520,
    textAlign: 'center',
    position: 'relative',
    borderRadius: 10,
    paddingTop: theme.spacing(15),
    paddingBottom: theme.spacing(15),
    [theme.breakpoints.up('md')]: {
      maxWidth: 'unset',
      margin: 'unset',
      textAlign: 'left',
    },
  })
);

const HeroOverlayStyle = styled(m.img)({
  zIndex: 9,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
});

const HomeHero: FC = () => {
  const { themeColorPresets, themeMode } = useSettings();

  const backgroundColor = themeMode === 'light' ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.7)';
  const textColor = themeMode === 'light' ? 'common.black' : 'common.white';

  return (
    <MotionContainer>
      <RootStyle>
        <HeroOverlayStyle
          alt="Szkoła - tło"
          src={`/overlay-home/overlay-home-${themeColorPresets}.png`}
          variants={varFade().in}
        />

        <Container>
          <ContentStyle sx={{ backgroundColor: backgroundColor }}>
            <m.div variants={varFade().inRight}>
              <Typography variant="h2" sx={{ color: textColor, margin: { md: 5 } }}>
                Szkoła Podstawowa im. Jana Pawła II-Papieża
                <br /> w Orłowie Drewnianym
                <Typography component="span" variant="h1" sx={{ color: 'primary.main' }}>
                  <br />
                  Witamy!
                </Typography>
              </Typography>
            </m.div>

            <Stack
              direction="column"
              justifyContent="space-evenly"
              alignItems={{ xs: 'center', md: 'flex-end' }}
              spacing={2}
              sx={{ pr: { md: 5 } }}
            >
              <m.div variants={varFade().inRight}>
                <Typography sx={{ color: textColor }}>Możesz nas również odwiedzieć na:</Typography>
              </m.div>

              <Stack spacing={2.5} alignItems="center" direction={{ xs: 'column', md: 'row' }}>
                <m.div variants={varFade().inRight}>
                  <TextIconLabel
                    icon={
                      <Image
                        alt="Facebook ikona"
                        src="/logo/facebook.png"
                        sx={{ width: 20, height: 20, mr: 1 }}
                      />
                    }
                    value={
                      <Link
                        href="https://www.facebook.com/sporlowd/"
                        target="_blank"
                        rel="noopener"
                        color={textColor}
                        sx={{ typography: 'body2' }}
                      >
                        Facebook
                      </Link>
                    }
                  />
                </m.div>

                <m.div variants={varFade().inRight}>
                  <TextIconLabel
                    icon={
                      <Image
                        alt="talentowisko ikona"
                        src="/logo/talentowisko.png"
                        sx={{ width: 37, height: 20, mr: 1 }}
                      />
                    }
                    value={
                      <Link
                        href="https://www.talentowisko.pl/podstawowa/szkola/szkola-podstawowa-im-jana-pawla-ii-w-orlowie-drewnianym/"
                        target="_blank"
                        rel="noopener"
                        color={textColor}
                        sx={{ typography: 'body2' }}
                      >
                        TalentowiSKO
                      </Link>
                    }
                  />
                </m.div>
              </Stack>

              <m.div variants={varFade().inRight}>
                <ButtonEPanel />
              </m.div>
            </Stack>
          </ContentStyle>
        </Container>
      </RootStyle>
      <Box sx={{ height: { md: '100vh' } }} />
    </MotionContainer>
  );
};

export { HomeHero };
