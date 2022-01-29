import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Container,
  Stack,
  SxProps,
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
import { FC } from 'react';
import { useArticlesContext } from '../../../hooks/useArticlesContext';
import Img from 'src/components/Image';
import { Image } from '../../../utils/Mock/images';
import { Link, useNavigate } from 'react-router-dom';
import { timeSince } from 'src/_zswod/utils/Mock/timeAgo';
import Scrollbar from 'src/components/Scrollbar';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentGallery } from 'src/_zswod/redux/gallery/selectors';
import { setGalleryAction } from 'src/_zswod/redux/gallery/actions';
import useResponsive from 'src/hooks/useResponsive';

const ImagesDemo: FC<{ image: Image }> = ({ image }) => (
  <Stack direction="row" spacing={1} justifyContent="flex-end">
    <Img key={image.index} src={image.uri} sx={{ height: 39, width: 39, borderRadius: 5 }} />
  </Stack>
);

type PickerProps = {
  sx?: SxProps;
};

const Picker: FC<PickerProps> = ({ sx }) => {
  const { articles, getArticlePrimaryImage } = useArticlesContext();
  const gallery = useSelector(getCurrentGallery);
  const dispatch = useDispatch();
  const isDesktop = useResponsive('up', 'lg');
  const navigate = useNavigate();

  const toggleGallery = (id: number) => {
    const isCurrent = id === gallery;

    if (!isDesktop) {
      return navigate(id.toString());
    }

    dispatch(setGalleryAction(isCurrent ? null : id));
  };

  return (
    <Container sx={sx}>
      <Scrollbar sx={{ height: '70vh', overflowX: 'hidden', padding: 0 }}>
        <Timeline position="left">
          {articles
            .filter((a) => getArticlePrimaryImage(a.id) !== undefined)
            .map((a) => (
              <TimelineItem key={a.id}>
                <TimelineOppositeContent>
                  <Accordion expanded={gallery === a.id} onClick={() => toggleGallery(a.id)}>
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
