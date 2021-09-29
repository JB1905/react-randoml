import React from 'react';
import type { Options } from 'randoml';

import { config } from './config';

export function withRandoml(options?: Options) {
  return <T,>(WrappedComponent: React.ComponentType<T>) => (props: T) => (
    <WrappedComponent {...props} {...config(options)} />
  );
}
