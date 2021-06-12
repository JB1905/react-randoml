import React from 'react';
import type { Options } from 'randoml';

import { randoml } from './randoml';

export function withRandoml(options?: Options) {
  return <T,>(WrappedComponent: React.ComponentType<T>) => (props: T) => (
    <WrappedComponent {...props} {...randoml(options)} />
  );
}
