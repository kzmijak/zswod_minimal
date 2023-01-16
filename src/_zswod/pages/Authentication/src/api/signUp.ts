import { api } from 'src/_zswod/modules/Axios';
import { mapRequestError } from 'src/_zswod/utils/handleRequestError';
import { RegisterFormContent } from '../models/RegisterFormContent';

const signUpErrorConsts = ['ErrUserAlreadyExists', 'Unknown'] as const;
type signUpError = typeof signUpErrorConsts[number];
const signUpErrorDisplayValues: Record<signUpError, string> = {
  ErrUserAlreadyExists: 'Taki użytkownik już istnieje',
  Unknown: 'Coś poszło nie tak',
};

const signUp = async (body: RegisterFormContent) => {
  const response = await api.post('auth/sign-up', body);
  return response.data;
};

const getSignUpError = (err: any) => {
  const error = mapRequestError<signUpError>(err, signUpErrorConsts, 'Unknown');

  return signUpErrorDisplayValues[error];
};

export { signUp, getSignUpError };
