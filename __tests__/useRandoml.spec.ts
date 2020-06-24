import { renderHook } from '@testing-library/react-hooks';

import { useRandoml } from '../src';

describe('useRandoml', () => {
  it('should return number for default options', () => {
    const { result } = renderHook(() => useRandoml());

    expect(result.current.choose()).toBeGreaterThan(0);
    expect(result.current.choose()).toBeLessThan(16);
  });

  it('should return number for custom options', () => {
    const options = {
      settings: {
        min: 4,
        max: 8,
        exclude: [5],
      },
    };

    const { result } = renderHook(() => useRandoml(options));

    expect(result.current.choose()).toBeGreaterThan(3);
    expect(result.current.choose()).toBeLessThan(9);
  });
});
