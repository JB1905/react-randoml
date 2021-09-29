import RandoML from 'randoml';
import type { Options } from 'randoml';

export const randoml = (options = {} as Options) => {
  const rand = new RandoML(options);

  // TODO? useCallback
  const choose = () => rand.choose();

  return { choose };
};
