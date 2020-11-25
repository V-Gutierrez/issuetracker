import Suspense from 'components/modules/Suspense';

import { render, screen } from '@testing-library/react';

describe('Suspense Component', () => {
  it('should render properly', () => {
    render(
      <Suspense loadingState={true}>
        <h1>Children</h1>
      </Suspense>
    );

    const defaultLoadingJSX = screen.getByTestId('suspense-default-fallback');

    expect(defaultLoadingJSX).toBeTruthy();
  });

  it('should render properly based on loading state', () => {
    render(
      <Suspense loadingState={false}>
        <h1 data-testid="suspense-children">Children</h1>
      </Suspense>
    );

    const children = screen.getByTestId('suspense-children');

    expect(children).toBeTruthy();
  });

  it('should render custom fallback properly', () => {
    const customFallback = (
      <h2 data-testid="suspense-custom-fallback">Custom Fallback</h2>
    );

    render(
      <Suspense loadingState={true} fallBack={customFallback}>
        <h1>Children</h1>
      </Suspense>
    );

    expect(screen.getByTestId('suspense-custom-fallback')).toBeTruthy();
  });
});
