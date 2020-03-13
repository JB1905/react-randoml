import React, { Component } from 'react';
import { render } from '@testing-library/react';

import { withRandoml } from '../src';

interface Props {
  choose: () => number | undefined;
}

describe('withRandoml usage with functional component', () => {
  const FunctionalComponent = ({ choose }: Props) => {
    const value = choose();

    return <>{value}</>;
  };

  const FunctionalComponentHOC = withRandoml(FunctionalComponent);

  it('should render random value', () => {
    const { container } = render(<FunctionalComponentHOC />);

    expect(container.firstChild).toMatchInlineSnapshot('6');
  });
});

describe('withRandoml usage with class component', () => {
  class ClassComponent extends Component<Props> {
    render() {
      const { choose } = this.props;

      const value = choose();

      return <>{value}</>;
    }
  }

  const ClassComponentHOC = withRandoml(ClassComponent);

  it('should render random value', () => {
    const { container } = render(<ClassComponentHOC />);

    expect(container.firstChild).toMatchInlineSnapshot('6');
  });
});
