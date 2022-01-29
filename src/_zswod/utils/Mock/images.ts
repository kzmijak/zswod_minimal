type Image = {
  index: number;
  uri: string;
  alt: string;
  actors?: string[];
  articleId: number;
};

const images: Image[] = [
  {
    index: 1,
    uri: 'https://www.talentowisko.pl/resizer/?w=960&i=uploads/entries/dd0e29b8b3f60db6af01518186de9e41.jpeg',
    alt: 'Portret "MONECIKA" - maskotki SKO',
    articleId: 1,
  },
  {
    index: 2,
    uri: 'https://www.talentowisko.pl/resizer/?w=960&i=uploads/entries/8554caee6a06dc38843ea319b4b64aeb.jpeg',
    alt: '„BEZPIECZNIE NA WSI: NIE RYZYKUJESZ, GDY ZWIERZĘTA ZNASZ I SZANUJESZ”',
    articleId: 1,
  },
  {
    index: 3,
    uri: 'https://www.talentowisko.pl/resizer/?w=960&i=uploads/entries/00008d77d703eda31b12309c52de0b71.jpeg',
    alt: '„PRZYJACIELE Z BULLERBYN”',
    articleId: 2,
  },
  {
    index: 4,
    uri: 'https://www.talentowisko.pl/resizer/?w=960&i=uploads/entries/b5833b7b85f4ad1e9343e2616f266a35.jpeg',
    alt: '"WSZYSTKO O BUDŻECIE"',
    articleId: 2,
  },
  {
    index: 5,
    uri: 'https://www.talentowisko.pl/resizer/?w=960&i=uploads/entries/550fe91a4838e27c94eae4c55f19e828.jpeg',
    alt: 'Zbiórka zużytych baterii',
    articleId: 3,
  },
  {
    index: 6,
    uri: 'https://www.talentowisko.pl/resizer/?w=960&i=uploads/entries/ffc9af931e3a99dae0e56e72fdfbf1a5.jpeg',
    alt: 'NAJBOGATSZA KLASA LUTEGO',
    articleId: 3,
  },
  {
    index: 7,
    uri: 'https://www.talentowisko.pl/resizer/?w=960&i=uploads/entries/686617e066a95249a51c1cb3b090ca19.jpeg',
    alt: 'LIDER LUTOWEGO OSZCZĘDZANIA',
    articleId: 4,
  },
  {
    index: 8,
    uri: 'https://www.talentowisko.pl/resizer/?w=960&i=uploads/entries/5f2f434d136a57782099f84df1150432.jpeg',
    alt: '„SERCE ZA SERCE”',
    articleId: 4,
  },
  {
    index: 9,
    uri: 'https://www.talentowisko.pl/resizer/?w=960&i=uploads/entries/d1651b6c1790af40e8712a4d43f7a7bb.jpeg',
    alt: '„SŁODKI KONKURS”',
    articleId: 5,
  },
  {
    index: 10,
    uri: 'https://www.talentowisko.pl/resizer/?w=960&i=uploads/entries/9a4bed84e3affe218a53da4e5754ec61.jpeg',
    alt: 'SKO-wicze TALENTY PREZENTUJĄ, ŻYCZENIA Z SERCA SKŁADAJĄ …..',
    articleId: 5,
  },
  {
    index: 11,
    uri: 'https://www.talentowisko.pl/resizer/?w=960&i=uploads/entries/356f5d70311f04da0df01e072c2be464.jpeg',
    alt: '„JĘZYK POLSKI – TO NAS WYRÓŻNIA!”',
    articleId: 6,
  },
  {
    index: 12,
    uri: 'https://www.talentowisko.pl/resizer/?w=960&i=uploads/entries/2b9ebee483ae3b204a0d1767c6ccb57d.jpeg',
    alt: 'Zbieramy nakrętki dla chorych dzieci',
    articleId: 6,
  },
  {
    index: 13,
    uri: 'https://www.talentowisko.pl/resizer/?w=960&i=uploads/entries/2b9ebee483ae3b204a0d1767c6ccb57d.jpeg',
    alt: 'Zbieramy nakrętki dla chorych dzieci',
    articleId: 6,
  },
  {
    index: 14,
    uri: 'https://www.talentowisko.pl/resizer/?w=960&i=uploads/entries/2b9ebee483ae3b204a0d1767c6ccb57d.jpeg',
    alt: 'Zbieramy nakrętki dla chorych dzieci',
    articleId: 6,
  },
  {
    index: 15,
    uri: 'https://www.talentowisko.pl/resizer/?w=960&i=uploads/entries/2b9ebee483ae3b204a0d1767c6ccb57d.jpeg',
    alt: 'Zbieramy nakrętki dla chorych dzieci',
    articleId: 6,
  },
];

export { images as imagesMockData };
export type { Image };
