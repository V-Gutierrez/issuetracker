import React from 'react';
import Suspense from 'components/modules/Suspense';
import { useGetRepositoryInfoQuery } from 'queries/generated/hooks';

interface RepositoryCardProps {
  name: string;
  owner: string;
}

function RepositoryCard({ name, owner }: RepositoryCardProps) {
  const { data, loading } = useGetRepositoryInfoQuery({
    variables: {
      name,
      owner
    }
  });

  return (
    <span
      className={data ? 'repositorycard' : 'repositorycard--empty'}
      data-testid="repositorycard-wrapper"
    >
      <Suspense loadingState={loading}>
        {!loading && data?.repository && (
          <>
            <h1 className="repositorycard__title">
              <a href={data?.repository.url}>
                {data?.repository?.nameWithOwner}
              </a>
            </h1>
            <span className="repositorycard__stats">
              <span className="repositorycard__stats__stars">
                <p>Stars</p>
                <p>{data?.repository?.stargazerCount}</p>
              </span>
              <span className="repositorycard__stats__pullrequests">
                <p>Pull Requests</p>
                <p>{data?.repository?.pullRequests.totalCount}</p>
              </span>
              <span className="repositorycard__stats__issues">
                <p>Issues open</p>
                <p>{data?.repository?.issues.totalCount}</p>
              </span>
            </span>
          </>
        )}
      </Suspense>
    </span>
  );
}

export default RepositoryCard;
