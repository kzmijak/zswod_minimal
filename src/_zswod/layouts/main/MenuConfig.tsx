// components
import Iconify from 'src/components/Iconify';
import { menuContents } from 'src/_zswod/routes/src/menu.paths';

// ----------------------------------------------------------------------

const ICON_SIZE = {
  width: 22,
  height: 22,
};

const mappedMenus = menuContents.map((menuItem) => ({
  title: menuItem.label,
  icon: <Iconify icon={'eva:home-fill'} {...ICON_SIZE} />,
  path: menuItem.link,
  children: [
    {
      subheader: menuItem.label,
      items: menuItem.children.map((child) => ({
        title: child.label,
        path: child.link,
      })),
    },
  ],
}));

console.log(mappedMenus);

const menuConfig = [
  ...mappedMenus,
  {
    title: 'Strona główna',
    icon: <Iconify icon={'eva:home-fill'} {...ICON_SIZE} />,
    path: '/',
  },
  {
    title: 'Documentation',
    icon: <Iconify icon={'eva:book-open-fill'} {...ICON_SIZE} />,
    path: '',
  },
];

export default menuConfig;
