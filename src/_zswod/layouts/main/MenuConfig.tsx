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
    title: 'Dziennik Vulcan',
    icon: <Iconify icon={'eva:book-open-fill'} {...ICON_SIZE} />,
    path: 'https://cufs.vulcan.net.pl/powiatdebicki/Account/LogOn?ReturnUrl=%2Fpowiatdebicki%2FFS%2FLS%3Fwa%3Dwsignin1.0%26wtrealm%3Dhttps%253a%252f%252fuonetplus.vulcan.net.pl%252fpowiatdebicki%252fLoginEndpoint.aspx%26wctx%3Dhttps%253a%252f%252fuonetplus.vulcan.net.pl%252fpowiatdebicki%252fLoginEndpoint.aspx',
  },
];

export default menuConfig;
