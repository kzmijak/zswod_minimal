const mapRequestError = <TEnum extends string>(
  err: any,
  options: readonly string[],
  fallback: TEnum
) => (options.includes(err) ? (err as TEnum) : fallback);

export { mapRequestError };
