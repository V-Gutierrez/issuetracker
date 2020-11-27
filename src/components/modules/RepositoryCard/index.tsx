import React from 'react';
import { useGetRepositoryInfoQuery } from 'queries/generated/hooks';
import { RiGitPullRequestFill, RiStarFill } from 'react-icons/ri';
import { VscIssues } from 'react-icons/vsc';
import Suspense from 'components/modules/Suspense';

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
            <a href={data?.repository.url}>{data?.repository?.nameWithOwner}</a>
          </h1>
          <Suspense loadingState={loading}>
            <span
              data-testid="repositorycard-stats"
              className="repositorycard__stats"
            >
              <span className="repositorycard__stats__stars">
                <span role="img">
                  <RiStarFill size={30} color="white" />
                </span>
                <p>{data?.repository?.stargazerCount}</p>
              </span>
              <span className="repositorycard__stats__pullrequests">
                <span role="img">
                  <RiGitPullRequestFill size={30} color="white" />
                </span>
                <p>{data?.repository?.pullRequests.totalCount}</p>
              </span>
              <span className="repositorycard__stats__issues">
                <span role="img">
                  <VscIssues size={30} color="white" />
                </span>
                <p>{data?.repository?.issues.totalCount}</p>
              </span>
            </span>
          </Suspense>
        </span>
      )}
    </>
  );
}

export default RepositoryCard;
