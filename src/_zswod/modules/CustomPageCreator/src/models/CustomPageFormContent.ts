import { Icon } from 'src/_zswod/models/enums/Icon';

type CustomPageFormContent = {
  iconId: Icon;
  section: string;
  title: string;
};

const nullCustomPageFormContent: CustomPageFormContent = {
  iconId: 'Unknown',
  section: '',
  title: '',
};

export { nullCustomPageFormContent };
export type { CustomPageFormContent };
