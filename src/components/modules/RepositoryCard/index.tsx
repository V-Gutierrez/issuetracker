import { useRepositoryQuery } from 'queries/generated/hooks';
import React from 'react';

interface RepositoryCardProps {
  name: string;
  owner: string;
}

function RepositoryCard({ name, owner }: RepositoryCardProps) {
  const { data } = useRepositoryQuery({
    variables: {
      name,
      owner
    }
  });

  return (
    <span>
      <h1 data-testid="repositorycard-name">
        {data?.repository.nameWithOwner}
      </h1>
      <p data-testid="repositorycard-stars">
        ⭐{data?.repository.stargazerCount}
      </p>
      <p data-testid="repositorycard-pullrequests">
        🔀{data?.repository.pullRequests.totalCount}
      </p>
      <p data-testid="repositorycard-issues">
        🚩{data?.repository.issues.totalCount}
      </p>
    </span>
  );
}

export default RepositoryCard;
