import type { Options } from 'randoml';

import { connect } from './connect';

export const useRandoml = (options?: Options) => {
  return connect(options);
};
