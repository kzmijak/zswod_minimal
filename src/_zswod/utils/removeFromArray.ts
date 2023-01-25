const removeFromArray = <T>(
  array: T[],
  predicate: (itemToRemove: T) => boolean,
  itemToInsert?: T
) => {
  const arrayCopy = array.slice();
  const index = array.findIndex((item) => predicate(item));
  Boolean(itemToInsert) ? arrayCopy.splice(index, 1, itemToInsert!) : arrayCopy.splice(index, 1);
  return arrayCopy;
};

export { removeFromArray };
