import React, { useState } from 'react';
import { useGetRepositoryInfoQuery } from 'queries/generated/hooks';
import { RiGitPullRequestFill, RiStarFill } from 'react-icons/ri';
import { VscIssues } from 'react-icons/vsc';
import Suspense from 'components/modules/Suspense';
import StatsCard from 'components/modules/StatsCard';
import useToolTip from 'components/hooks/useTooltip';

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
  const {
    toggleTooltip: togglePRsTooltip,
    tooltipVisibility: pullrequestsTooltipVisibility
  } = useToolTip();
  const {
    toggleTooltip: toggleIssuesTooltip,
    tooltipVisibility: issuesTooltipVisibility
  } = useToolTip();

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
              <span className="repositorycard__stats__stars">
                <span role="img">
                  <RiStarFill size={30} color="white" />
                </span>
                <p>{data?.repository?.stargazerCount}</p>
              </span>
              <span
                data-testid="repositorycard-pullrequeststooltip"
                className="repositorycard__stats__pullrequests"
                onMouseEnter={togglePRsTooltip}
                onMouseLeave={togglePRsTooltip}
              >
                {pullrequestsTooltipVisibility && (
                  <span className="repositorycard__stats__tooltip">
                    {data?.repository.issues.nodes.map((pullRequest) => {
                      return <StatsCard {...pullRequest} type="pull_request" />;
                    })}
                  </span>
                )}
                <span role="img">
                  <RiGitPullRequestFill size={30} color="white" />
                </span>
                <p>{data?.repository?.pullRequests.totalCount}</p>
              </span>

              <span
                data-testid="repositorycard-issuestooltip"
                className="repositorycard__stats__issues"
                onMouseEnter={toggleIssuesTooltip}
                onMouseLeave={toggleIssuesTooltip}
              >
                {issuesTooltipVisibility && (
                  <span className="repositorycard__stats__tooltip">
                    {data?.repository.issues.nodes.map((issue) => {
                      return <StatsCard {...issue} type="issue" />;
                    })}
                  </span>
                )}
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
