import React from 'react';
import Suspense from 'components/modules/Suspense';
import { useRepositoryQuery } from 'queries/generated/hooks';

interface RepositoryCardProps {
  name: string;
  owner: string;
}

function RepositoryCard({ name, owner }: RepositoryCardProps) {
  const { data, loading } = useRepositoryQuery({
    variables: {
      name,
      owner
    }
  });

  return (
    <span data-testid="repositorycard-wrapper">
      <Suspense loadingState={loading}>
        {!loading && data?.repository && (
          <>
            <h1>{data?.repository?.nameWithOwner}</h1>
            <p>⭐{data?.repository?.stargazerCount}</p>
            <p>🔀{data?.repository?.pullRequests.totalCount}</p>
            <p>🚩{data?.repository?.issues.totalCount}</p>
          </>
        )}
      </Suspense>
    </span>
  );
}

export default RepositoryCard;
