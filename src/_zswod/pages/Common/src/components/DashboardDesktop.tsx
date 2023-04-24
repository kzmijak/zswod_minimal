import { FC, useLayoutEffect, useRef, useState } from 'react';
import { Button, Grid, Stack, Typography } from '@mui/material';
import { WelcomeBoard } from './elements/WelcomeBoard';
import { ArticleDemo } from './elements/ArticleDemo';
import { useSelector } from 'react-redux';
import { selectAllCustomPageHeaders } from 'src/_zswod/modules/CustomPageHeaders';
import { Iconography } from 'src/_zswod/components/Iconography';
import Scrollbar from 'src/components/Scrollbar';
import { SmartLink } from 'src/_zswod/components/SmartLink';

const DashboardDesktop: FC = () => {
  const scrollbarContainerRef = useRef<HTMLDivElement>();
  const [scrollbarHeight, setScrollbarHeight] = useState(0);

  const customPageHeaders = useSelector(selectAllCustomPageHeaders);

  useLayoutEffect(() => {
    if (scrollbarContainerRef.current) {
      setScrollbarHeight(scrollbarContainerRef.current.clientHeight);
    }
  }, []);

  return (
    <Stack direction="row" spacing={3}>
      <Stack flex={1}>
        <WelcomeBoard />
      </Stack>
      <Stack flex={2}>
        <Stack flex={1}>
          <ArticleDemo />
        </Stack>

        <Stack flex={3} ref={scrollbarContainerRef} paddingTop={3}>
          {!!scrollbarContainerRef.current && (
            <Scrollbar sx={{ height: scrollbarHeight }}>
              <Grid container spacing={2} padding={2}>
                {customPageHeaders.map(({ icon, title, url, link }) => (
                  <Grid item key={title} xs={4} height={120}>
                    <SmartLink to={link ?? `/etablica/${url}`}>
                      <Button
                        variant="outlined"
                        sx={{ width: '100%', height: '100%' }}
                        color="inherit"
                      >
                        <Stack alignItems="center">
                          <Iconography id={icon} />
                          <Typography variant="overline">{title}</Typography>
                        </Stack>
                      </Button>
                    </SmartLink>
                  </Grid>
                ))}
              </Grid>
            </Scrollbar>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
};

export { DashboardDesktop };
