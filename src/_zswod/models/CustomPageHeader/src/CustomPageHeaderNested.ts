import { Icon } from '../../enums/Icon';

type CustomPageHeaderItem = {
  url: string;
  title: string;
  icon: Icon;
  link?: string;
};

type CustomPageHeaderSection = {
  section: string;
  items: CustomPageHeaderItem[];
};

export type { CustomPageHeaderSection, CustomPageHeaderItem };
