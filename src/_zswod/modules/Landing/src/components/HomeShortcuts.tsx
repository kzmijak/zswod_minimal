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
import { FC } from 'react';

// ----------------------------------------------------------------------

type Section = 'articles' | 'gallery' | 'contact';

const CARDS: {
  icon: string;
  title: string;
  description: string;
  section: Section;
}[] = [
  {
    icon: '/images/artykuły.jfif',
    title: 'Nowości',
    description:
      'Nowości, aktualizacje i wydarzenia - tutaj dowiesz się czym szkoła żyje w ostatnim czasie.',
    section: 'articles',
  },
  {
    icon: '/images/galeria.jfif',
    title: 'Galeria',
    section: 'gallery',
    description:
      'Zdjęcia, sesje i upominki - tutaj znajdziesz najświeższe materiały z ostatnich wydarzeń szkolnych.',
  },
  {
    icon: '/images/kontakt.jpg',
    title: 'Kontakt',
    section: 'contact',
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

type HomeShortcutsProps = {
  articlesRef: React.RefObject<HTMLDivElement> | null | undefined;
  galleryRef: React.RefObject<HTMLDivElement> | null | undefined;
  contactRef: React.RefObject<HTMLDivElement> | null | undefined;
};

const HomeShortcuts: FC<HomeShortcutsProps> = ({ articlesRef, galleryRef, contactRef }) => {
  const scrollToRef = (section: Section) => {
    switch (section) {
      case 'articles':
        articlesRef?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        break;
      case 'gallery':
        galleryRef?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        break;
      case 'contact':
        contactRef?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        break;
      default:
        break;
    }
  };

  return (
    <RootStyle>
      <Container>
        <Box
          sx={{
            textAlign: 'center',
            mb: { xs: 10, md: 15 },
          }}
        >
          <MotionInView variants={varFade().inUp} sx={{ alignItems: 'center' }}>
            <Image
              alt="Logo szkoły"
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
            gridTemplateColumns: { xs: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' },
          }}
        >
          {CARDS.map((card, index) => (
            <MotionInView variants={varFade().inUp} key={card.title}>
              <Card sx={{ maxWidth: 345 }} onClick={() => scrollToRef(card.section)}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={card.icon}
                    alt={`Miniaturka artykuły (${card.title})`}
                  />
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
};

export { HomeShortcuts };
