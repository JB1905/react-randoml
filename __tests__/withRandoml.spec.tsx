import React, { Component } from 'react';
import { render } from '@testing-library/react';

import { withRandoml } from '../src';

interface Props {
  choose: () => number | undefined;
}

describe('withRandoml usage with functional component', () => {
  const FunctionalComponent: React.FC<Props> = ({ choose }) => {
    const choice = choose();

    return <>{choice}</>;
  };

  const FunctionalComponentHOC = withRandoml(FunctionalComponent);

  it('should render random value', () => {
    const { container } = render(<FunctionalComponentHOC />);

    expect(parseInt(container.firstChild!.textContent!)).toBeGreaterThanOrEqual(
      1
    );
    expect(parseInt(container.firstChild!.textContent!)).toBeLessThanOrEqual(
      15
    );
  });
});

describe('withRandoml usage with class component', () => {
  class ClassComponent extends Component<Props> {
    render() {
      const { choose } = this.props;

      const choice = choose();

      return <>{choice}</>;
    }
  }

  const ClassComponentHOC = withRandoml(ClassComponent);

  it('should render random value', () => {
    const { container } = render(<ClassComponentHOC />);

    expect(parseInt(container.firstChild!.textContent!)).toBeGreaterThanOrEqual(
      1
    );
    expect(parseInt(container.firstChild!.textContent!)).toBeLessThanOrEqual(
      15
    );
  });
});
