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
import { useArticlesContext } from '../../../hooks/useArticlesContext';
import Img from 'src/components/Image';
import { Link, useNavigate } from 'react-router-dom';
import Scrollbar from 'src/components/Scrollbar';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentGallery } from 'src/_zswod/redux/gallery/selectors';
import { setGalleryAction } from 'src/_zswod/redux/gallery/actions';
import useResponsive from 'src/hooks/useResponsive';
import { TimeOutlinedList } from 'src/_zswod/components/TimeOutlinedList';
import { PATHS_ABOUT } from 'src/_zswod/routes/src/menu.paths';
import { Image } from '../../../models/image';

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
              <TimeOutlinedList key={a.id} date={a.date}>
                <Accordion expanded={gallery === a.id} onClick={() => toggleGallery(a.id)}>
                  <AccordionSummary>
                    <Typography variant="h6" sx={{ width: '80%', flexShrink: 0 }}>
                      {a.title}
                    </Typography>
                    <ImagesDemo image={getArticlePrimaryImage(a.id)} />
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
