import { FC } from 'react';
import { LinkBase } from './LinkBase';

const LinkRegister: FC = () => (
  <LinkBase
    header="Nie masz jeszcze konta?"
    callToAction="Zarejestruj się!"
    url="/konto/rejestracja"
  />
);

export { LinkRegister };
