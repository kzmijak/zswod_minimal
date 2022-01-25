type PathReduced = {
  [key: string]: string;
};

const PATH_DASHBOARD_ROOT = `/etablica`;
const PATH_DASHBOARD: PathReduced = {
  about: `${PATH_DASHBOARD_ROOT}/oszkole`,
  parents: `${PATH_DASHBOARD_ROOT}/dlarodzicow`,
  students: `${PATH_DASHBOARD_ROOT}/dlaucznia`,
};

const menuContents = [
  {
    label: 'O Szkole',
    link: PATH_DASHBOARD.about,
    children: [
      { label: 'Nowości', link: `${PATH_DASHBOARD.about}/nowosci` },
      { label: 'Galeria', link: `${PATH_DASHBOARD.about}/galeria` },
      { label: 'Rekrutacja', link: `${PATH_DASHBOARD.about}/rekrutacja` },
      { label: 'Szkolne dokumenty', link: `${PATH_DASHBOARD.about}/dokumenty` },
      { label: 'Kronika szkoły', link: `${PATH_DASHBOARD.about}/kronika` },
      { label: 'Biblioteka', link: `${PATH_DASHBOARD.about}/biblioteka` },
      { label: 'Konkursy', link: `${PATH_DASHBOARD.about}/konkursy` },
      { label: 'Projekty', link: `${PATH_DASHBOARD.about}/projekty` },
      { label: 'RODO', link: `${PATH_DASHBOARD.about}/rodo` },
      {
        label: 'Talentowisko',
        link: 'https://www.talentowisko.pl/podstawowa/szkola/szkola-podstawowa-im-jana-pawla-ii-w-orlowie-drewnianym/',
      },
    ],
  },
  {
    label: 'Dla Rodziców',
    link: PATH_DASHBOARD.parents,
    children: [
      { label: 'Harmonogram zebrań', link: `${PATH_DASHBOARD.parents}/harmonogram` },
      { label: 'Konsultacje dla Rodziców', link: `${PATH_DASHBOARD.parents}/konsultacje` },
      { label: 'Rada Rodziców', link: `${PATH_DASHBOARD.parents}/rada` },
      { label: 'Grono pedagogiczne', link: `${PATH_DASHBOARD.parents}/grono` },
      { label: 'Kalendarz roku szkolnego', link: `${PATH_DASHBOARD.parents}/kalendarz` },
      { label: 'Pomoc psycholoczino-pedagogiczna', link: `${PATH_DASHBOARD.parents}/pomocpp` },
    ],
  },
  {
    label: 'Dla Ucznia',
    link: PATH_DASHBOARD.students,
    children: [
      { label: 'Tygodniowy Plan Zajęć', link: `${PATH_DASHBOARD.students}/zajecia` },
      { label: 'Dziennik elektroniczny', link: `${PATH_DASHBOARD.students}/dziennik` },
      { label: 'Samorząd Uczniowski', link: `${PATH_DASHBOARD.students}/samorzad` },
      { label: 'Zajęcia pozalekcyjne', link: `${PATH_DASHBOARD.students}/zajecia` },
      { label: 'Pedagog szkolny', link: `${PATH_DASHBOARD.students}/pedagog` },
      { label: 'Szkolne Koło Wolontariatu', link: `${PATH_DASHBOARD.students}/wolontariat` },
      { label: 'Wychowawcy', link: `${PATH_DASHBOARD.students}/wychowawcy` },
    ],
  },
];

const PATHS_ABOUT: PathReduced = menuContents[0].children.reduce(
  (obj, item) => ({ ...obj, ...{ [item.label]: item.link } }),
  {}
);

const PATHS_PARENTS: PathReduced = menuContents[1].children.reduce(
  (obj, item) => ({ ...obj, ...{ [item.label]: item.link } }),
  {}
);
const PATHS_STUDENTS: PathReduced = menuContents[2].children.reduce(
  (obj, item) => ({ ...obj, ...{ [item.label]: item.link } }),
  {}
);

export {
  menuContents,
  PATHS_ABOUT,
  PATHS_PARENTS,
  PATHS_STUDENTS,
  PATH_DASHBOARD,
  PATH_DASHBOARD_ROOT,
};
