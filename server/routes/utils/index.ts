const nextAvailableId = (
  collection: {
    id: number;
    [key: string]: any;
  }[]
) => collection.reduce((prev, current) => (prev.id > current.id ? prev : current)).id + 1;

export { nextAvailableId };
