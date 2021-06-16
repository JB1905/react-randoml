import RandoML from 'randoml';
import type { Options } from 'randoml';

export const config = (options = {} as Options) => {
  const rand = new RandoML(options);

  const choose = rand.choose;
  const predict = rand.predict;

  return { choose, predict };
};
