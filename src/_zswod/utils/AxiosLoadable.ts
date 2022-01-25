interface AxiosLoadable<T> {
  isLoading: boolean;
  error: string | null;
  data: T[];
}

const getAxiosLoadableInstance = <T>(): AxiosLoadable<T> => ({
  isLoading: false,
  data: [] as T[],
  error: null,
});

export { getAxiosLoadableInstance };
export type { AxiosLoadable };
