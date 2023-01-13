import { FC } from 'react';
import { api } from 'src/_zswod/modules/Axios';
import { RegisterForm } from '../components/RegisterForm';
import { RegisterFormContent } from '../models/RegisterFormContent';

const executeCreateUser = async (request: RegisterFormContent) => {
  await api.post('auth/sign-up', request);
};

const RegisterView: FC = () => {
  const handleSubmit = async (body: RegisterFormContent) => {
    try {
      await executeCreateUser(body);
      alert('Wszystko git');
    } catch {
      alert('Coś poszło nie tak');
    }
  };

  return <RegisterForm onSubmit={handleSubmit} />;
};

export { RegisterView };
