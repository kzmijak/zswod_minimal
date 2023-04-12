import { Container, Stack, Typography } from '@mui/material';
import { FC } from 'react';
import { Navigate, useParams } from 'react-router';
import { Iconography } from 'src/_zswod/components/Iconography';
import { Page } from 'src/_zswod/components/Page';
import { selectCustomPageHeaderByTitleNormalized } from 'src/_zswod/modules/CustomPageHeaders';
import { PATH_DASHBOARD } from 'src/_zswod/routes';
import { useRootSelector } from 'src/_zswod/utils/useRootSelector';

const CustomPageView: FC = () => {
  const { customPageSection, customPageTitle } = useParams();
  const relatedHeader = useRootSelector((state) =>
    selectCustomPageHeaderByTitleNormalized(state, customPageSection + '/' + customPageTitle)
  );

  if (!Boolean(relatedHeader)) return <Navigate to={PATH_DASHBOARD.root} />;
  const { title, icon, section } = relatedHeader!;

  return (
    <Page title={relatedHeader!.title}>
      <Container>
        <Stack direction="row" spacing={1}>
          <Iconography id={icon} />
          <Stack spacing={2}>
            <Typography variant="caption">{section}</Typography>
            <Typography variant="h4">{title}</Typography>
          </Stack>
        </Stack>
      </Container>
    </Page>
  );
};

export { CustomPageView };
