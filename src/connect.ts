import RandoML from 'randoml';
import type { Options } from 'randoml';

export const connect = (options = {} as Options) => {
  const rand = new RandoML(options);

  const choose = rand.choose;
  const predict = rand.predict;

  return { choose, predict };
};
