import { FC } from 'react';
import { LinkBase } from './LinkBase';

const LinkResetPassword: FC = () => (
  <LinkBase
    header="Nie pamiętasz hasła?"
    callToAction="Zresetuj je!"
    url="/konto/resetowanie-hasla"
  />
);

export { LinkResetPassword };
