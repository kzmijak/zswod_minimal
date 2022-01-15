import { ReactElement } from 'react';

// ----------------------------------------------------------------------

export type MenuItemChildrenProps = {
  subheader: string;
  items: {
    title: string;
    path: string;
  }[];
};

export type MenuItemProps = {
  title: string;
  path: string;
  icon?: ReactElement;
  to?: string;
  children?: MenuItemChildrenProps[];
};

export type MenuProps = {
  isOffset: boolean;
  isHome: boolean;
  navConfig: MenuItemProps[];
};
