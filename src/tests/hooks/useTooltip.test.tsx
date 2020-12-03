import { act, renderHook } from '@testing-library/react-hooks';
import useToolTip from 'hooks/useTooltip';

describe('useToolTip hooks', () => {
  it('should switch toogle state properly ', () => {
    const { result } = renderHook(() => useToolTip());

    expect(result.current.tooltipVisibility).toEqual(false);

    act(() => result.current.toggleTooltip());

    expect(result.current.tooltipVisibility).toEqual(true);
    expect.assertions(2);
  });
});
