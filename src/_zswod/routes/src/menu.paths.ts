import { PATH_DASHBOARD } from './dashboard.routes';

const menuContents = [
  {
    label: 'O Szkole',
    link: PATH_DASHBOARD.about,
    children: [
      { label: 'Kontakt', link: `${PATH_DASHBOARD.about}/kontakt` },
      { label: 'Rekrutacja', link: `${PATH_DASHBOARD.about}/rekrutacja` },
      { label: 'Galeria', link: `${PATH_DASHBOARD.about}/galeria` },
      { label: 'Szkolne dokumenty', link: `${PATH_DASHBOARD.about}/dokumenty` },
      { label: 'Kronika szkoły', link: `${PATH_DASHBOARD.about}/kronika` },
      { label: 'Biblioteka', link: `${PATH_DASHBOARD.about}/biblioteka` },
      { label: 'Facebook', link: 'https://www.facebook.com/sporlowd/' },
      { label: 'Konkursy', link: `${PATH_DASHBOARD.about}/konkursy` },
      { label: 'RODO', link: `${PATH_DASHBOARD.about}/rodo` },
      { label: 'Projekty', link: `${PATH_DASHBOARD.about}/projekty` },
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
      { label: 'Komunikaty i informacje', link: `${PATH_DASHBOARD.parents}/info` },
      { label: 'Grono pedagogiczne', link: `${PATH_DASHBOARD.parents}/grono` },
      { label: 'Konsultacje dla Rodziców', link: `${PATH_DASHBOARD.parents}/konsultacje` },
      { label: 'Kalendarz roku szkolnego', link: `${PATH_DASHBOARD.parents}/kalendarz` },
      { label: 'Harmonogram zebrań', link: `${PATH_DASHBOARD.parents}/harmonogram` },
      { label: 'Rada Rodziców', link: `${PATH_DASHBOARD.parents}/rada` },
      { label: 'Pomoc psycholoczino-pedagogiczna', link: `${PATH_DASHBOARD.parents}/pomocpp` },
    ],
  },
  {
    label: 'Dla ucznia',
    link: PATH_DASHBOARD.students,
    children: [
      { label: 'Dziennik elektroniczny', link: `${PATH_DASHBOARD.students}/dziennik` },
      { label: 'Zajęcia pozalekcyjne', link: `${PATH_DASHBOARD.students}/zajecia` },
      { label: 'Pedagog szkolny', link: `${PATH_DASHBOARD.students}/pedagog` },
      { label: 'Samorząd Uczniowski', link: `${PATH_DASHBOARD.students}/samorzad` },
      { label: 'Szkolne Koło Wolontariatu', link: `${PATH_DASHBOARD.students}/wolontariat` },
      { label: 'Wychowawcy', link: `${PATH_DASHBOARD.students}/wychowawcy` },
      { label: 'Tygodniowy Plan Zajęć', link: `${PATH_DASHBOARD.students}/zajecia` },
    ],
  },
];

export { menuContents };
