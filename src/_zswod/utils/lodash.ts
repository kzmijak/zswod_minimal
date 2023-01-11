import { pick as pickBase } from 'lodash';

const pick = <TOut, TIn = any>(obj: TIn, ...keys: (keyof TIn)[]) => pickBase(obj, keys) as TOut;

const arrayPick = <TOut, TIn = any>(arr: TIn[], ...keys: (keyof TIn)[]) =>
  arr.map<TOut>((obj) => pick<TOut, TIn>(obj, ...keys));

export { pick, arrayPick };
