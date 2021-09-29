import React from 'react';
import type { Options } from 'randoml';

import { connect } from './connect';

export function withRandoml(options?: Options) {
  return <T,>(WrappedComponent: React.ComponentType<T>) =>
    (props: T) =>
      <WrappedComponent {...props} {...connect(options)} />;
}
