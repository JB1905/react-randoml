import React from 'react';
import { Options } from 'randoml/lib/types/Options';

import { useRandoml } from './useRandoml';

export const withRandoml = (
  WrappedComponent: React.ComponentClass,
  options?: Options
) => (props: React.ComponentProps<any>) => (
  <WrappedComponent {...props} {...useRandoml(options)} />
);
