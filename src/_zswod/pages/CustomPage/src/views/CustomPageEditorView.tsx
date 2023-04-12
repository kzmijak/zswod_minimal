import { Typography } from '@mui/material';
import { FC } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Iconography } from 'src/_zswod/components/Iconography';
import { Page } from 'src/_zswod/components/Page';
import { mapStringToIcon } from 'src/_zswod/models/enums/Icon';

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

  const { iconId, section, title } = parseQueryToCustomPage(searchParams);

  return (
    <Page title={title}>
      <Iconography id={iconId} />
      <Typography>{section}</Typography>
      <Typography>{title}</Typography>
    </Page>
  );
};

export { CustomPageEditorView, customPageEditorQueryKeys };
