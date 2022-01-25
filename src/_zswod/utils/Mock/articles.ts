type Article = {
  id: number;
  description: string;
  title: string;
};

const articles: Article[] = [
  {
    id: 1,
    description:
      'Jak zwykle nasi uczniowie nie zawiedli! Udało się zebrać 28 kg różnego rodzaju słodkości, które zostały przekazane do Domu Dziecka w Krasnymstawie. Bardzo serdecznie dziękujemy wszystkim uczniom i ich rodzicom! Wierzymy, że udało nam się podarować dzieciom odrobinę radości na nadchodzące święta.',
    title: 'Mikołajkowa zbiórka słodyczy',
  },
  {
    id: 2,
    title: 'KIERMASZ ŚWIĄTECZNY',
    description:
      'Na dwa tygodnie przed Świętami Bożego Narodzenia w naszej szkole odbył się kiermasz ozdób świątecznych przygotowany przez uczniów klasy III . Celem organizacji kiermaszu, było zdobycie środków na dogoterapię . Instruktorzy ze STOWARZYSZENIA ZWIERZĘTA LUDZIOM odwiedzają z psami miejsca i osoby, które potrzebują wsparcia. Wspierają min. małych pacjentów z Centrum Zdrowia Dziecka, Kliniki Budzik oraz innych warszawskich szpitali.',
  },
  {
    id: 3,
    title: 'NAJDŁUŻSZY ŁAŃCUCH ŚWIĄTECZNY',
    description:
      'Przed świętami odbyło się rozstrzygnięcie konkursu pod hasłem „Najdłuższy łańcuch świąteczny”. Celem konkursu było kultywowanie tradycji świąt Bożego Narodzenia, integracja zespołów klasowych oraz dobra zabawa. Uczniowie pracowali z wielkim zaangażowaniem, mile spędzając czas.',
  },
  {
    id: 4,
    title: 'Kartka dla obrońców granic',
    description:
      'Uczniowie naszej szkoły wzięli udział w akcji  Fundacji Niepodległości „Kartka na granicę”. Dzieci wykazały się wielkim zaangażowaniem, pomysłowością i aktywnością. Uczniowie składali podziękowania oraz wyrazy wsparcia za trudną  pracę żołnierzom,  policjantom, funkcjonariuszom straży granicznej, którzy pełnią służbę w zagrożonych miejscach na wschodniej granicy.',
  },
  {
    id: 5,
    title: '„Czy to jutro, czy to dziś, wszystkim jest potrzebny Miś!”',
    description:
      'Dnia 26 listopada obchodziliśmy w klasach I – III  Światowy Dzień Pluszowego Misia. Tego dnia dzieci przyszły do szkoły ze swoimi ulubionymi i kochanymi  pluszakami. Opowiadały o swoich maskotkach, obejrzały filmiki pt. " Legenda o pluszowym misiu oraz "O niedźwiedziu Wojtku, który walczył podczas II wojny światowej". Poznały najbardziej popularne misie z bajek, ciekawostki o gatunkach i życiu prawdziwych niedźwiedzi. Wykonały misiowe  opaski na głowę,  pracę plastyczną - misia z różnej wielkości kółek, śpiewały i bawiły się z misiami przy piosence "Jadą, jadą misie". Posmakowały również misiowego przysmaku -  miodu.',
  },
  {
    id: 6,
    title: 'Wyniki konkursu „Drugie życie puszki”',
    description:
      'Konkurs plastyczny polegał na wykonaniu  oryginalnego i użytecznego „dzieła”  z metalowej puszki lub puszek. Wszystkie prace są bardzo orginalne, wykonane  starannie i z wykorzystaniem różnorodnych materiałów do ich ozdabiania. Oto ich wykonawcy: Kacper Tokarski, Malwinka Andruszewska, Wiktoria Jurkiewicz, Maja i Miłosz Matwiej, Zosia Rowińska, Kornelka Antończak, Teodor Świta, Miłosz Raczkowski, Ola Tokarska, Ola Domańska, Blanka Ziętek, Lenka Brodowski, Nadia Karwat, Lenka Molendowska. Na wyróżnienie zasługuje praca Kacpra, który wykonał piękną lampkę  na biurko. Wszystkim gratulujemy super pomysłów. ',
  },
] as Article[];

export { articles as articlesMockData };
export type { Article };
