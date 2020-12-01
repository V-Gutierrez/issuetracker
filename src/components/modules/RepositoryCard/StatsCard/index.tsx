import { GoIssueOpened, GoGitPullRequest } from 'react-icons/go';

interface StatsCard {
  id: string;
  title: string;
  url: string;
  type: 'issue' | 'pull_request';
}

function StatsCard({ id, title, url, type }: StatsCard) {
  return (
    <div
      data-testid="statscard-wrapper"
      className={type === 'issue' ? 'issue__card' : 'pullrequest__card'}
    >
      <a
        data-testid="statscard-anchor"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {type === 'issue' ? (
          <GoIssueOpened color="red" />
        ) : (
          <GoGitPullRequest color="green" />
        )}
        <p data-testid="statscard-title">{title}</p>
      </a>
    </div>
  );
}

export default StatsCard;
