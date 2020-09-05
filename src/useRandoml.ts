import RandoML from 'randoml';
import { Options } from 'randoml/lib/types';

export const useRandoml = (options = {} as Options) => {
  const rand = new RandoML(options);

  const choose = () => rand.choose();

  return { choose };
};
