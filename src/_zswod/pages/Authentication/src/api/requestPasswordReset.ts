import { api } from 'src/_zswod/modules/Axios';
import { mapRequestError } from 'src/_zswod/utils/handleRequestError';

const requestPasswordResetErrorConsts = [
  'ErrUserEmailQueryFailed',
  'ErrTokenCreationFailed',
  'ErrFailedToSendMessage',
  'Unknown',
] as const;
type RequestPasswordResetError = typeof requestPasswordResetErrorConsts[number];
const requestPasswordResetErrorDisplayValueDict: Record<RequestPasswordResetError, string> = {
  ErrFailedToSendMessage: 'Nie udało się wysłać wiadomości pod ten adres e-mail',
  ErrTokenCreationFailed: 'Nie udało się utworzyć tokena do odzyskania hasła',
  ErrUserEmailQueryFailed: 'Użytkownik o takim adresie e-mail nie istnieje',
  Unknown: 'Coś poszło nie tak',
};

const requestPasswordReset = async (email: string) => {
  const response = await api.post<boolean>('auth/reset-password', {
    email,
  });

  return response.data;
};

const getRequestPasswordResetError = (err: any) => {
  const error = mapRequestError<RequestPasswordResetError>(
    err,
    requestPasswordResetErrorConsts,
    'Unknown'
  );

  return requestPasswordResetErrorDisplayValueDict[error];
};

export { requestPasswordReset, getRequestPasswordResetError };
