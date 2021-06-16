import type { Options } from 'randoml';

// TODO rename file
import { config } from './config';

export const useRandoml = (options?: Options) => {
  return config(options);
};
