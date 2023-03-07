import { Paper, Stack, Typography, styled, Box } from '@mui/material';
import { FC } from 'react';
import { isLight } from 'src/_zswod/utils/paletteMode';
import { WelcomeIllustration } from '../../assets/illustration_welcome';

const PaperStyled = styled(Paper)(({ theme }) => ({
  backgroundColor: isLight(theme) ? theme.palette.primary.lighter : theme.palette.primary.darker,
  height: '100%',
}));

type WelcomeBoardProps = {};

const WelcomeBoard: FC<WelcomeBoardProps> = () => (
  <PaperStyled elevation={5}>
    <Stack height="100%" spacing={2} padding={3}>
      <Typography variant="h2">Witaj w E-Panelu!</Typography>
      <Typography variant="h4">
        E-Panel to internetowe centrum naszej szkolnej społeczności!
      </Typography>
      <Typography>
        Tutaj znajdziesz najważniejsze informacje związane z naszą szkołą - przeczytasz{' '}
        <b>najnowsze nowiny</b>, obejrzysz <b>ciekawe fotografie</b> i odnajdziesz wszystkie{' '}
        <b>bardzo ważne dokumenty</b>.
      </Typography>
      <Typography>
        Po lewej stronie znajduje się <b>menu nawigacji</b> - wraz z jego pomocą odwiedzisz
        wszystkie zakamarki naszego portalu
      </Typography>
      <Box sx={{ padding: 5 }}>
        <WelcomeIllustration sx={{ maxHeight: 100 }} />
      </Box>
    </Stack>
  </PaperStyled>
);

export { WelcomeBoard };
