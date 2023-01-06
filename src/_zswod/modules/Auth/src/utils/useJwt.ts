import { useState } from 'react';
import useLocalStorage from 'src/hooks/useLocalStorage';

const JWT_STORAGE_KEY = 'JWT';

const useJwt = () => {
  const [storedToken, storeToken] = useLocalStorage(JWT_STORAGE_KEY, '');
  const [token, setToken] = useState<string>(storedToken ?? '');

  const handleSetToken = (token: string) => {
    storeToken(token);
    setToken(token);
  };

  return { token, storeToken: handleSetToken };
};

export { useJwt };
