import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Container,
  Stack,
  Typography,
} from '@mui/material';
import {
  Timeline,
  TimelineConnector,
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
import Scrollbar from 'src/components/Scrollbar';

const ImagesDemo: FC<{ image: Image }> = ({ image }) => (
  <Stack direction="row" spacing={1} justifyContent="flex-end">
    <Img key={image.index} src={image.uri} sx={{ height: 39, width: 39, borderRadius: 5 }} />
  </Stack>
);

type PickerProps = {
  openedGallery: number | null;
  setOpenedGallery: Function;
};

const Picker: FC<PickerProps> = ({ openedGallery, setOpenedGallery }) => {
  const { articles, getArticlePrimaryImage } = useArticlesContext();
  const toggleGallery = (id: number) => {
    const isCurrent = id === openedGallery;

    setOpenedGallery(isCurrent ? null : id);
  };

  return (
    <Container>
      <Scrollbar sx={{ height: '70vh', overflowX: 'hidden', padding: 0 }}>
        <Timeline position="left">
          {articles
            .filter((a) => getArticlePrimaryImage(a.id) !== undefined)
            .map((a) => (
              <TimelineItem key={a.id}>
                <TimelineOppositeContent>
                  <Accordion expanded={openedGallery === a.id} onClick={() => toggleGallery(a.id)}>
                    <AccordionSummary>
                      <Typography variant="h6" sx={{ width: '80%', flexShrink: 0 }}>
                        {a.title}
                      </Typography>
                      <ImagesDemo image={getArticlePrimaryImage(a.id)} />
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
                  <TimelineDot sx={{ background: 'white' }} />
                  <TimelineConnector />
                </TimelineSeparator>

                <TimelineOppositeContent sx={{ flex: 0.1 }}>
                  <Typography noWrap sx={{ position: 'absolute', left: 0 }}>
                    {timeSince(a.date)} temu
                  </Typography>
                </TimelineOppositeContent>
              </TimelineItem>
            ))}
        </Timeline>
      </Scrollbar>
    </Container>
  );
};

export { Picker };
