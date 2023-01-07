import { FC } from 'react';
import { api } from 'src/_zswod/modules/Axios';
import { useJwt } from 'src/_zswod/modules/User';
import { LoginForm } from '../components/LoginForm';
import { LoginFormContent } from '../models/LoginFormContent';

const executeSignIn = async (body: LoginFormContent) => {
  const response = await api.post<string>('auth/sign-in', body);
  return response.data;
};

const LoginView: FC = () => {
  const { setToken } = useJwt();

  const handleSubmit = async (body: LoginFormContent) => {
    try {
      const token = await executeSignIn(body);
      setToken(token);
      alert('wszystko git, odśwież');
    } catch {
      alert('coś poszło nie tak');
    }
  };

  return <LoginForm onSubmit={handleSubmit} />;
};

export { LoginView };
