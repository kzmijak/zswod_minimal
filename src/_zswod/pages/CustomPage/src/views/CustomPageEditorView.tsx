import { Container } from '@mui/material';
import { FC } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Page } from 'src/_zswod/components/Page';
import { mapStringToIcon } from 'src/_zswod/models/enums/Icon';
import { CustomPagePresenter } from '../components/CustomPagePresenter';
import { createCustomPage } from '../api/createCustomPage';
import { PATH_DASHBOARD } from 'src/_zswod/routes';
import { useAppDispatch } from 'src/_zswod/utils/useAppDispatch';
import { invalidateCustomPagesFetch } from 'src/_zswod/modules/CustomPageHeaders';

const customPageEditorQueryKeys = {
  sectionKey: 'sekcja',
  titleKey: 'tytul',
  iconKey: 'ikona',
};

const parseQueryToCustomPage = (searchParams: URLSearchParams) => {
  const { iconKey, sectionKey, titleKey } = customPageEditorQueryKeys;

  const sectionQuery = searchParams.get(sectionKey) ?? '';
  const titleQuery = searchParams.get(titleKey) ?? '';
  const iconQuery = searchParams.get(iconKey);

  return {
    iconId: mapStringToIcon(iconQuery),
    section: sectionQuery ?? '',
    title: titleQuery ?? '',
  };
};

const CustomPageEditorView: FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { section, title, iconId } = parseQueryToCustomPage(searchParams);

  const publishCustomPage = async (content: string) => {
    const customPageUrl = await createCustomPage({ content, iconId, section, title });
    dispatch(invalidateCustomPagesFetch());
    navigate(`${PATH_DASHBOARD.root}/${customPageUrl}`, { replace: true });
  };

  const cancelCreatingCustomPage = () => {
    navigate(PATH_DASHBOARD.root, { replace: true });
  };

  return (
    <Page title={title}>
      <Container>
        <CustomPagePresenter
          startInEditMode
          section={section}
          title={title}
          onEditModeEnd={publishCustomPage}
          onRemove={cancelCreatingCustomPage}
        />
      </Container>
    </Page>
  );
};

export { CustomPageEditorView, customPageEditorQueryKeys };
