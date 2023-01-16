import { api } from 'src/_zswod/modules/Axios';
import { mapRequestError } from 'src/_zswod/utils/handleRequestError';

const verifyResetPasswordTokenErrorConsts = [
  'ErrCouldNotParseUuid',
  'ErrTokenNotFound',
  'ErrTokenExpired',
  'Unknown',
] as const;
type VerifyResetPasswordTokenError = typeof verifyResetPasswordTokenErrorConsts[number];
const verifyResetPasswordTokenErrorDisplayValues: Record<VerifyResetPasswordTokenError, string> = {
  ErrCouldNotParseUuid: 'Niepoprawna prośba o zmianę hasła',
  ErrTokenExpired: 'Prośba zmiany hasła wygasła, spróbuj ponownie wysłać prośbę',
  ErrTokenNotFound: 'Niepoprawna prośba o zmianę hasła',
  Unknown: 'Coś poszło nie tak',
};

const verifyResetPasswordToken = async (token: string) => {
  const response = await api.get<boolean>('auth/check-reset-password-token', { params: { token } });
  return response.data;
};

const getVerifyResetPasswordError = (err: any) => {
  const error = mapRequestError<VerifyResetPasswordTokenError>(
    err,
    verifyResetPasswordTokenErrorConsts,
    'Unknown'
  );

  return verifyResetPasswordTokenErrorDisplayValues[error];
};

export { verifyResetPasswordToken, getVerifyResetPasswordError };
