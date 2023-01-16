import { api } from 'src/_zswod/modules/Axios';
import { mapRequestError } from 'src/_zswod/utils/handleRequestError';
import { LoginFormContent } from '../models/LoginFormContent';

const signInErrorConsts = [
  'ErrUserNotFound',
  'ErrInvalidPassword',
  'ErrInvalidClaims',
  'ErrNoRoles',
  'ErrUnknownRole',
  'Unknown',
] as const;
type signInError = typeof signInErrorConsts[number];
const signInErrorDisplayValues: Record<signInError, string> = {
  ErrUserNotFound: 'Użytkownik o podanym adresie i/lub haśle nie istnieje',
  ErrInvalidPassword: 'Użytkownik o podanym adresie i/lub haśle nie istnieje',
  ErrInvalidClaims: 'Użytkownik istnieje, jednak stracił ważność',
  ErrNoRoles: 'Użytkownik istnieje, jednak stracił ważność',
  ErrUnknownRole: 'Użytkownik istnieje, jednak stracił ważność',
  Unknown: 'Coś poszło nie tak',
};

const signIn = async (body: LoginFormContent) => {
  const response = await api.post<string>('auth/sign-in', body);
  return response.data;
};

const getSignInError = (err: any) => {
  const error = mapRequestError<signInError>(err, signInErrorConsts, 'Unknown');

  return signInErrorDisplayValues[error];
};

export { signIn, getSignInError };
