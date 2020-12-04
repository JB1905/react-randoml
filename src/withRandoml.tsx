import React from 'react';
import { Options } from 'randoml/lib/types';

import { useRandoml } from './useRandoml';

export function withRandoml(options?: Options) {
  return <T,>(WrappedComponent: React.ComponentType<T>) => (props: T) => (
    <WrappedComponent {...props} {...useRandoml(options)} />
  );
}
