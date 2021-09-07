import { renderHook } from '@testing-library/react-hooks';

import { useRandoml } from '../src';

describe('useRandoml', () => {
  it('should return a number for the default options', () => {
    const { result } = renderHook(() => useRandoml());

    const choice = result.current.choose();

    expect(choice).toBeGreaterThanOrEqual(1);
    expect(choice).toBeLessThanOrEqual(15);
  });

  it('should return a number for custom options', () => {
    const options = {
      settings: {
        min: 4,
        max: 8,
        exclude: [5],
      },
    };

    const { result } = renderHook(() => useRandoml(options));

    const choice = result.current.choose();

    expect(choice).toBeGreaterThanOrEqual(4);
    expect(choice).toBeLessThanOrEqual(8);
  });
});
