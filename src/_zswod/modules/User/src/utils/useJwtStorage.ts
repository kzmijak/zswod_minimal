import { useBrowserStorage } from 'src/_zswod/utils/useBrowserStorage';

const STORAGE_KEY = 'JWT';

const useJwtStorage = () => {
  const { getItem, setItem } = useBrowserStorage<string>(localStorage, STORAGE_KEY);
  const token = getItem() as string;

  const setToken = (token: string | null) => {
    setItem(token);
  };

  return { token, setToken };
};

export { useJwtStorage };
