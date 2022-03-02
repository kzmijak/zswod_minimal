import { AxiosError } from 'axios';
import { useState } from 'react';

interface AxiosLoadable<T> {
  isLoading: boolean;
  error: string | null;
  data: T | null;
  isLoaded: boolean;
}

const getAxiosLoadableInstance = <T>(): AxiosLoadable<T> => ({
  isLoading: false,
  isLoaded: false,
  data: null,
  error: null,
});

const useAxiosLoadable = <T>() => {
  const [requestState, setRequestState] = useState(getAxiosLoadableInstance<T>());

  const startLoading = () => {
    setRequestState({
      ...requestState,
      isLoading: true,
    });
  };

  const onSuccess = (data: T) => {
    setRequestState({
      ...requestState,
      isLoading: false,
      isLoaded: true,
      data,
    });
  };

  const onError = (error: AxiosError) => {
    setRequestState({
      ...requestState,
      isLoading: false,
      isLoaded: true,
      error: error.response?.data,
    });
  };

  return {
    startLoading,
    onSuccess,
    onError,
    requestState,
  };
};

export { useAxiosLoadable, getAxiosLoadableInstance };
export type { AxiosLoadable };
