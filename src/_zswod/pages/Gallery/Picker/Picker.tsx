import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Container,
  Fab,
  Stack,
  Typography,
} from '@mui/material';
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from '@mui/lab';
import ContentPasteGoIcon from '@mui/icons-material/ContentPasteGo';
import { FC, useState } from 'react';
import { useArticlesContext } from '../../../hooks/useArticlesContext';
import Img from 'src/components/Image';
import { Image } from '../../../utils/Mock/images';
import { Link } from 'react-router-dom';
import { timeSince } from 'src/_zswod/utils/Mock/timeAgo';

const ImagesDemo: FC<{ images: Image[] }> = ({ images }) => (
  <Stack direction="row" spacing={1} justifyContent="flex-end">
    {images.slice(0, 4).map((i) => (
      <Img key={i.index} src={i.uri} sx={{ height: 39, width: 39, borderRadius: 5 }} />
    ))}
    {images.length > 4 && (
      <Fab disabled color="secondary" aria-label="add" size="small">
        +{images.length - 4}
      </Fab>
    )}
  </Stack>
);

const Picker: FC = () => {
  const { articles, getArticleGallery } = useArticlesContext();
  const [openedGallery, setOpenedGallery] = useState<number | null>(null);
  const toggleGallery = (id: number) => {
    const isCurrent = id === openedGallery;

    setOpenedGallery(isCurrent ? null : id);
  };

  return (
    <Container maxWidth="xl">
      <Typography variant="h3" component="h1" paragraph>
        Galeria
      </Typography>
      <Timeline position="left" sx={{ float: 'left' }}>
        {articles.map((a) => (
          <TimelineItem key={a.id}>
            <TimelineOppositeContent>
              <Accordion expanded={openedGallery === a.id} onClick={() => toggleGallery(a.id)}>
                <AccordionSummary>
                  <Typography variant="h6" sx={{ width: '60%', flexShrink: 0 }}>
                    {a.title}
                  </Typography>
                  <ImagesDemo images={getArticleGallery(a.id)} />
                </AccordionSummary>

                <AccordionDetails>
                  <Typography>
                    <Button component={Link} to="artykul" startIcon={<ContentPasteGoIcon />}>
                      Zobacz artykuł
                    </Button>
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </TimelineOppositeContent>

            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>

            <TimelineContent>{timeSince(a.date)} temu</TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Container>
  );
};

export { Picker };
