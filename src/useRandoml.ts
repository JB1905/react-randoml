import RandoML from 'randoml';
import { Options } from '../node_modules/randoml/lib/types/Options';

export const useRandoml = (options: Options = {} as Options) => {
  const rand = new RandoML(options);

  const choose = () => rand.choose();

  return { choose };
};
