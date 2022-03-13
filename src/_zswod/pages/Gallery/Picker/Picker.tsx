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
import { Timeline } from '@mui/lab';
import ContentPasteGoIcon from '@mui/icons-material/ContentPasteGo';
import { FC } from 'react';
import Img from 'src/components/Image';
import { Link, useNavigate } from 'react-router-dom';
import Scrollbar from 'src/components/Scrollbar';
import { useDispatch, useSelector } from 'react-redux';
import { getArticles, getCurrentGallery } from 'src/_zswod/redux/gallery/selectors';
import { useGalleryActions } from 'src/_zswod/redux/gallery/actions';
import useResponsive from 'src/hooks/useResponsive';
import { TimeOutlinedList } from 'src/_zswod/components/TimeOutlinedList';
import { PATHS_ABOUT } from 'src/_zswod/routes/src/menu.paths';
import { Image } from '../../../models/Image/image';
import { Article } from 'src/_zswod/models/Article/article';

const ImagesDemo: FC<{ image: Image }> = ({ image }) => (
  <Stack direction="row" spacing={1} justifyContent="flex-end">
    <Img key={image.id} src={image.uri} sx={{ height: 39, width: 39, borderRadius: 5 }} />
  </Stack>
);

type PickerProps = {
  sx?: SxProps;
};

const Picker: FC<PickerProps> = ({ sx }) => {
  const articles = useSelector(getArticles);

  const gallery = useSelector(getCurrentGallery);
  const dispatch = useDispatch();
  const isDesktop = useResponsive('up', 'lg');
  const navigate = useNavigate();
  const { setGalleryAction } = useGalleryActions();

  const toggleGallery = async (next: Article) => {
    const isCurrent = next.id === gallery?.id;

    if (!isDesktop) {
      return navigate(next.id.toString());
    }

    await dispatch(setGalleryAction(isCurrent ? null : next));
  };

  return (
    <Container sx={sx}>
      <Scrollbar sx={{ height: '70vh', overflowX: 'hidden', padding: 0 }}>
        <Timeline position="left">
          {articles!
            .filter((a) => a.images !== undefined)
            .map((a) => (
              <TimeOutlinedList key={a.id} date={a.date}>
                <Accordion expanded={gallery?.id === a.id} onClick={async () => toggleGallery(a)}>
                  <AccordionSummary>
                    <Typography variant="h6" sx={{ width: '80%', flexShrink: 0 }}>
                      {a.title}
                    </Typography>
                    <ImagesDemo image={a.images[0]} />
                  </AccordionSummary>

                  <AccordionDetails>
                    <Typography>
                      <Button
                        component={Link}
                        to={`${PATHS_ABOUT.Nowości}/${a.id}`}
                        startIcon={<ContentPasteGoIcon />}
                      >
                        Zobacz artykuł
                      </Button>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </TimeOutlinedList>
            ))}
        </Timeline>
      </Scrollbar>
    </Container>
  );
};

export { Picker };
