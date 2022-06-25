const createArrayMapper =
  <TSource, TDestination>(scheme: (_dto: TSource) => TDestination) =>
  (dtos: TSource[]) =>
    dtos.map((dto) => scheme(dto));

export { createArrayMapper };
