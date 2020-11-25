interface SuspenseProps {
  children: React.ReactNode;
  loadingState: boolean;
  fallBack?: JSX.Element;
}

const defaultFallback = (
  <div className="suspense__default-callback">
    <h1 data-testid="suspense-default-fallback">Loading...</h1>
  </div>
);

export default function Suspense({
  children,
  loadingState,
  fallBack = defaultFallback
}: SuspenseProps) {
  return (
    <div data-testid="suspense-container" className="suspense__container">
      {loadingState ? fallBack : children}
    </div>
  );
}
