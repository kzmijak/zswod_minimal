interface AxiosLoadable<T> {
  isLoading: boolean;
  error: string | null;
  data: T[];
  isLoaded: boolean;
}

const getAxiosLoadableInstance = <T>(): AxiosLoadable<T> => ({
  isLoading: false,
  isLoaded: false,
  data: [] as T[],
  error: null,
});

export { getAxiosLoadableInstance };
export type { AxiosLoadable };
