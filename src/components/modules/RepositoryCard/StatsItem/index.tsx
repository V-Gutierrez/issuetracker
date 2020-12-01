import useToolTip from 'components/hooks/useTooltip';
import StatsCard from 'components/modules/RepositoryCard/StatsCard';
import React from 'react';
import { RiGitPullRequestFill } from 'react-icons/ri';
import { VscIssues } from 'react-icons/vsc';

interface NodeItem {
  id: string;
  url: string;
  title: string;
}

interface StatsItemProps {
  type: 'pull_request' | 'issue';
  dataset: any;
}

function StatsItem({ dataset, type }: StatsItemProps) {
  const { toggleTooltip, tooltipVisibility } = useToolTip();

  return (
    <span
      data-testid={
        type === 'pull_request'
          ? 'statsitem-pullrequeststooltip'
          : 'statsitem-issuestooltip'
      }
      className={
        type === 'pull_request'
          ? 'statsitem__stats__pullrequests'
          : 'statsitem__stats__issues'
      }
      onMouseEnter={toggleTooltip}
      onMouseLeave={toggleTooltip}
    >
      {tooltipVisibility && (
        <span  data-testid='statsitem-nodeslist' className="statsitem__stats__tooltip">
          {dataset?.nodes.map((item: NodeItem) => {
            return <StatsCard key={item.id} {...item} type={type} />;
          })}
        </span>
      )}
      <span role="img">
        {type === 'pull_request' ? (
          <RiGitPullRequestFill size={30} color="white" />
        ) : (
          <VscIssues size={30} color="white" />
        )}
      </span>
      <p>{dataset?.totalCount}</p>
    </span>
  );
}

export default StatsItem;
