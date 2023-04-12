import { useNavigate } from 'react-router';
import { Icon } from 'src/_zswod/models/enums/Icon';
import { PATH_DASHBOARD } from 'src/_zswod/routes';
import { customPageEditorQueryKeys } from '../views/CustomPageEditorView';

type CustomPageEditorSearchParams = {
  section: string;
  title: string;
  iconId: Icon;
};

const useCustomPageEditorNavigator = () => {
  const navigate = useNavigate();
  const { iconKey, sectionKey, titleKey } = customPageEditorQueryKeys;

  const navigateToCustomPageEditor = ({ iconId, section, title }: CustomPageEditorSearchParams) => {
    const searchParams = new URLSearchParams();

    searchParams.append(iconKey, iconId);
    searchParams.append(sectionKey, section);
    searchParams.append(titleKey, title);

    navigate(`${PATH_DASHBOARD.customPageCreator}?${searchParams.toString()}`);
  };

  return { navigateToCustomPageEditor };
};

export { useCustomPageEditorNavigator };
