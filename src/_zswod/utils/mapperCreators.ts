const createArrayMapper =
  <TOrigin, TDestination>(schema: (origin: TOrigin) => TDestination) =>
  (array: TOrigin[]) =>
    array.map(schema);

const createEnumMapper =
  <TOutput>(consts: readonly string[], fallbackValue: TOutput) =>
  (testedString: string | null) => {
    if (Boolean(consts.find((value) => value === testedString))) {
      return testedString as any as TOutput;
    }

    return fallbackValue;
  };

const createDisplayValueGetter =
  <TModel extends string | number | symbol, TOutput = string>(dict: Record<TModel, TOutput>) =>
  (key: TModel | null | undefined) =>
    Boolean(key) ? dict[key!] : null;

export { createArrayMapper, createEnumMapper, createDisplayValueGetter };
