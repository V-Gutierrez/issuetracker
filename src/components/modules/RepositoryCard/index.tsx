import React from 'react';

interface RepositoryCardProps {
  repositoryName: string;
  stars: number;
  pullRequests: number;
  issues: number;
}

function RepositoryCard({
  repositoryName,
  stars,
  pullRequests,
  issues
}: RepositoryCardProps) {
  return (
    <span>
      <h1 data-testid="repositorycard-name">{repositoryName}</h1>
      <p data-testid="repositorycard-stars">{stars}</p>
      <p data-testid="repositorycard-pullrequests">{pullRequests}</p>
      <p data-testid="repositorycard-issues">{issues}</p>
    </span>
  );
}

export default RepositoryCard;
