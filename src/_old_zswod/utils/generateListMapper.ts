const generateListMapper =
  <TDto, TMapped>(elementMapper: (_: TDto) => TMapped) =>
  (data: TDto[]): TMapped[] =>
    data.map((element) => elementMapper(element!)).filter((element) => element !== undefined);

export { generateListMapper };
