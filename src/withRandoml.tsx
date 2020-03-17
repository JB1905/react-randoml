import React from 'react';
import { Options } from 'randoml/lib/types';

import { useRandoml } from './useRandoml';

export const withRandoml = (
  WrappedComponent: React.ComponentType<any>,
  options?: Options
) => (props: React.ComponentProps<any>) => (
  <WrappedComponent {...props} {...useRandoml(options)} />
);
