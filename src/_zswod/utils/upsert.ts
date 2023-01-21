import { isArray } from 'lodash';

const upsert = <T>(destination: T[], target: T) => {
  const targetArray = (isArray(target) ? target : [target]) as T[];
  const destCopy = destination.slice();

  targetArray.forEach((target) => {
    const index = destination.indexOf(target);
    if (index !== -1) {
      destCopy[index] = target;
    } else {
      destCopy.push(target);
    }
  });

  return destCopy;
};

export { upsert };
