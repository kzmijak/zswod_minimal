import { Container } from '@mui/material';
import { FC } from 'react';
import { useNavigate, useParams } from 'react-router';
import { Page } from 'src/_zswod/components/Page';
import {
  invalidateCustomPagesFetch,
  selectCustomPageHeaderByTitleNormalized,
} from 'src/_zswod/modules/CustomPageHeaders';
import { PATH_DASHBOARD } from 'src/_zswod/routes';
import { useRootSelector } from 'src/_zswod/utils/useRootSelector';
import { useFetchCustomPage } from '../api/useFetchCustomPage';
import { CustomPagePresenter } from '../components/CustomPagePresenter';
import { useAppDispatch } from 'src/_zswod/utils/useAppDispatch';
import { deleteCustomPage } from '../api/deleteCustomPage';
import { updateCustomPage } from '../api/updateCustomPage';

const CustomPageView: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { customPageSection, customPageTitle } = useParams();
  if (!Boolean(customPageSection) || !Boolean(customPageTitle)) {
    navigate(PATH_DASHBOARD.root);
  }

  const { customPage, fetchStatus } = useFetchCustomPage(customPageSection!, customPageTitle!);

  const relatedHeader = useRootSelector((state) =>
    selectCustomPageHeaderByTitleNormalized(state, customPageSection + '/' + customPageTitle)
  );

  if (!Boolean(customPage)) return null;

  const handleDelete = async () => {
    try {
      await deleteCustomPage(customPage!.id);
      dispatch(invalidateCustomPagesFetch());
      navigate(PATH_DASHBOARD.root);
    } catch {}
  };

  const handleUpdate = async (content: string) => {
    try {
      await updateCustomPage(customPage!.id, content);
      dispatch(invalidateCustomPagesFetch());
    } catch {}
  };

  return (
    <Page title={relatedHeader?.title ?? customPageTitle!}>
      <Container>
        {fetchStatus === 'success' && (
          <CustomPagePresenter
            {...customPage!}
            onEditModeEnd={handleUpdate}
            onRemove={handleDelete}
          />
        )}
      </Container>
    </Page>
  );
};

export { CustomPageView };
