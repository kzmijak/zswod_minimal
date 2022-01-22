// @mui
import { styled } from '@mui/material/styles';
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from '@mui/material';
// components
import Image from 'src/components/Image';
import { MotionInView, varFade } from 'src/components/animate';

// ----------------------------------------------------------------------

const CARDS = [
  {
    icon: '/images/artykuły.jfif',
    title: 'Nowości',
    description:
      'Nowości, aktualizacje i wydarzenia - tutaj dowiesz się czym szkoła żyje w ostatnim czasie.',
  },
  {
    icon: '/images/galeria.jfif',
    title: 'Galeria',
    description:
      'Zdjęcia, sesje i upominki - tutaj znajdziesz najświeższe materiały z ostatnich wydarzeń szkolnych.',
  },
  {
    icon: '/images/kontakt.jpg',
    title: 'Historia',
    description:
      'Archiwalne wpisy upamiętniające przeszłe wydarzenia szkolne - momenty do których zawsze miło wracamy.',
  },
  {
    icon: '/images/kontakt.jpg',
    title: 'Kontakt',
    description:
      'Jeżeli posiadasz jakieś ważne sprawy które chcesz nam przekazać, tutaj znajdziesz sposób na to aby się z nami skomunikować.',
  },
];

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(15),
  [theme.breakpoints.up('md')]: {
    paddingBottom: theme.spacing(15),
  },
}));

// ----------------------------------------------------------------------

export default function HomeShortcuts() {
  return (
    <RootStyle>
      <Container>
        <Box
          sx={{
            textAlign: 'center',
            mb: { xs: 10, md: 25 },
          }}
        >
          <MotionInView variants={varFade().inUp} sx={{ alignItems: 'center' }}>
            <Image
              alt="sketch icon"
              src="/logo/logo_centered.png"
              sx={{
                height: 300,
                width: 300,
                mr: 1,
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
                background: 'white',
                borderRadius: 50,
              }}
            />
          </MotionInView>
          <MotionInView variants={varFade().inDown}>
            <Typography variant="h2">Od czego dzisiaj zaczynamy?</Typography>
          </MotionInView>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gap: { xs: 5, lg: 10 },
            gridTemplateColumns: { xs: 'repeat(1, 1fr)', md: 'repeat(4, 1fr)' },
          }}
        >
          {CARDS.map((card, index) => (
            <MotionInView variants={varFade().inUp} key={card.title}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia component="img" height="140" image={card.icon} alt="green iguana" />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {card.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {card.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </MotionInView>
          ))}
        </Box>
      </Container>
    </RootStyle>
  );
}
