const PATH_ACCOUNT = `/konto`;
const PATH_VULCAN =
  'https://cufs.vulcan.net.pl/powiatdebicki/Account/LogOn?ReturnUrl=%2Fpowiatdebicki%2FFS%2FLS%3Fwa%3Dwsignin1.0%26wtrealm%3Dhttps%253a%252f%252fuonetplus.vulcan.net.pl%252fpowiatdebicki%252fLoginEndpoint.aspx%26wctx%3Dhttps%253a%252f%252fuonetplus.vulcan.net.pl%252fpowiatdebicki%252fLoginEndpoint.aspx';

const ROOT_DASHBOARD = `/etablica`;
const SECTION_MAIN = '/glowne';

const PATH_DASHBOARD = {
  root: ROOT_DASHBOARD,

  menu: `${ROOT_DASHBOARD}/menu`,
  articles: `${ROOT_DASHBOARD}${SECTION_MAIN}/artykuly`,
  galleries: `${ROOT_DASHBOARD}${SECTION_MAIN}/galerie`,
  customPageCreator: `${ROOT_DASHBOARD}${SECTION_MAIN}/wlasna-strona`,
} as const;

export { PATH_DASHBOARD, PATH_ACCOUNT, PATH_VULCAN };
