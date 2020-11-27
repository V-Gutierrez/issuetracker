import React from 'react';
import Suspense from 'components/modules/Suspense';
import { useGetRepositoryInfoQuery } from 'queries/generated/hooks';
import { RiGitPullRequestFill, RiStarFill } from 'react-icons/ri';
import { VscIssues } from 'react-icons/vsc';

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
      <h1 className="repositorycard__title">
        <a href={data?.repository.url}>{data?.repository?.nameWithOwner}</a>
      </h1>
      <Suspense loadingState={loading}>
        <span className="repositorycard__stats">
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
  );
}

export default RepositoryCard;
