import React from 'react';
import { useGetRepositoryInfoQuery } from 'queries/generated/hooks';
import Suspense from 'components/modules/Suspense';
import StatsItem from 'components/modules/RepositoryCard/StatsItem';

interface RepositoryCardProps {
  name: string;
  owner: string;
}

function RepositoryCard({ name, owner }: RepositoryCardProps) {
  const { data, error, loading } = useGetRepositoryInfoQuery({
    variables: {
      name,
      owner
    }
  });

  return (
    <>
      {!error && (
        <span className="repositorycard" data-testid="repositorycard-wrapper">
          <h1
            data-testid="repositorycard-title"
            className="repositorycard__title"
          >
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={data?.repository.url}
            >
              {data?.repository?.nameWithOwner}
            </a>
          </h1>
          <Suspense loadingState={loading}>
            <span
              data-testid="repositorycard-stats"
              className="repositorycard__stats"
            >
              <StatsItem
                dataset={data?.repository?.pullRequests}
                type="pull_request"
              />
              <StatsItem dataset={data?.repository?.issues} type="issue" />
            </span>
          </Suspense>
        </span>
      )}
    </>
  );
}

export default RepositoryCard;
