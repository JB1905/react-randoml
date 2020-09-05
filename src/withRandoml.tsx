import React from 'react';
import { Options } from 'randoml/lib/types';

import { useRandoml } from './useRandoml';

export function withRandoml<T>(options?: Options) {
  return (WrappedComponent: React.ComponentType<T>) => (props: T) => (
    <WrappedComponent {...props} {...useRandoml(options)} />
  );
}
