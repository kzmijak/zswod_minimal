import { galleryGreeter } from './gallery';
import { newsGreeter } from './news';

const greeters = [galleryGreeter, newsGreeter] as const;

type greetersType = typeof greeters[number];

const isGreeter = (greeter: string[]): greeter is greetersType =>
  greeters.includes(greeter as greetersType);

const useGreeter = (greeter: greetersType) => {
  if (!isGreeter(greeter)) {
    return '_GREETER_ERROR';
  }

  const max = Math.ceil(greeter.length);

  return greeter[Math.floor(Math.random() * max)];
};

export { useGreeter, galleryGreeter, newsGreeter };
