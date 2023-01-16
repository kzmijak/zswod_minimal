import { api } from 'src/_zswod/modules/Axios';
import { mapRequestError } from 'src/_zswod/utils/handleRequestError';

const setNewPasswordErrorConsts = [
  'ErrCouldNotParseUuid',
  'ErrTokenNotFound',
  'ErrTokenExpired',
  'ErrUserNotFound',
  'ErrCouldNotChangePassword',
  'Unknown',
] as const;
type setNewPasswordError = typeof setNewPasswordErrorConsts[number];
const setNewPasswordErrorDisplayValues: Record<setNewPasswordError, string> = {
  ErrCouldNotParseUuid: 'Niepoprawna prośba o zmianę hasła',
  ErrTokenExpired: 'Prośba zmiany hasła wygasła, spróbuj ponownie wysłać prośbę',
  ErrTokenNotFound: 'Niepoprawna prośba o zmianę hasła',
  ErrCouldNotChangePassword: 'Nie udało się zmienić hasła',
  ErrUserNotFound: 'Użytkownik którego dotyczy próba zmiany hasła nie istnieje',
  Unknown: 'Coś poszło nie tak',
};

const setNewPassword = async (token: string, password: string) => {
  const response = await api.post<boolean>('auth/set-new-password', { token, password });
  return response.data;
};

const getSetNewPasswordError = (err: any) => {
  const error = mapRequestError<setNewPasswordError>(err, setNewPasswordErrorConsts, 'Unknown');

  return setNewPasswordErrorDisplayValues[error];
};

export { setNewPassword, getSetNewPasswordError };
