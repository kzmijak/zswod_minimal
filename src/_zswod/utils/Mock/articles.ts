type Article = {
  id: number;
  short: string;
  content: JSX.Element;
  title: string;
  date: Date;
};

const articles: Article[] = [
  {
    id: 1,
    short:
      'Jak zwykle nasi uczniowie nie zawiedli! Udało się zebrać 28 kg różnego rodzaju słodkości.',
    title: 'Mikołajkowa zbiórka słodyczy',
    date: new Date('2022-01-27'),
  },
  {
    id: 2,
    title: 'KIERMASZ ŚWIĄTECZNY',
    short:
      'Na dwa tygodnie przed Świętami Bożego Narodzenia w naszej szkole odbył się kiermasz ozdób świątecznych.',
    date: new Date('2022-01-25'),
  },
  {
    id: 3,
    title: 'NAJDŁUŻSZY ŁAŃCUCH ŚWIĄTECZNY',
    short:
      'Przed świętami odbyło się rozstrzygnięcie konkursu pod hasłem „Najdłuższy łańcuch świąteczny”.',
    date: new Date('2022-01-21'),
  },
  {
    id: 4,
    title: 'Kartka dla obrońców granic',
    short:
      'Uczniowie naszej szkoły wzięli udział w akcji  Fundacji Niepodległości „Kartka na granicę”.',
    date: new Date('2022-01-14'),
  },
  {
    id: 5,
    title: '„Czy to jutro, czy to dziś, wszystkim jest potrzebny Miś!”',
    short: 'Dnia 26 listopada obchodziliśmy w klasach I – III  Światowy Dzień Pluszowego Misia. ',
    date: new Date('2021-12-24'),
  },
  {
    id: 6,
    title: 'Wyniki konkursu „Drugie życie puszki”',
    short:
      'Konkurs plastyczny polegał na wykonaniu  oryginalnego i użytecznego „dzieła”  z metalowej puszki lub puszek. ',
    date: new Date('2021-08-19'),
  },
  {
    id: 7,
    title: 'Wyniki konkursu „Drugie życie puszki”',
    short:
      'Konkurs plastyczny polegał na wykonaniu  oryginalnego i użytecznego „dzieła”  z metalowej puszki lub puszek. ',
    date: new Date('2021-08-19'),
  },
  {
    id: 8,
    title: 'Wyniki konkursu „Drugie życie puszki”',
    short:
      'Konkurs plastyczny polegał na wykonaniu  oryginalnego i użytecznego „dzieła”  z metalowej puszki lub puszek.  ',
    date: new Date('2021-08-19'),
  },
  {
    id: 9,
    title: 'Wyniki konkursu „Drugie życie puszki”',
    short:
      'Konkurs plastyczny polegał na wykonaniu  oryginalnego i użytecznego „dzieła”  z metalowej puszki lub puszek. ',
    date: new Date('2021-08-19'),
  },
] as Article[];

export { articles as articlesMockData };
export type { Article };
