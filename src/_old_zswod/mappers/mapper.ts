interface Mapper<From, To> {
  ResponseToModel: (from: From) => To;
  ListResponseToModel: (from: From[]) => To[];
}

export type { Mapper };
