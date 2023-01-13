import { FC } from 'react';
import { LinkBase } from './LinkBase';

const LinkLogin: FC = () => (
  <LinkBase header="Masz już konto?" callToAction="Zaloguj się!" url="/konto/logowanie" />
);

export { LinkLogin };
