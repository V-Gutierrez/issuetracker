import React from 'react';
import RepositoryCard from 'components/modules/RepositoryCard';

interface RepositoryNameAndOwnerDTO {
  name: string;
  owner: string;
}

interface RepositoriesProps {
  repositories: RepositoryNameAndOwnerDTO[];
}

function Repositories({ repositories }: RepositoriesProps) {
  return (
    <span className="repositories" data-testid="repositories-wrapper">
      {repositories &&
        repositories.map(({ name, owner }) => (
          <RepositoryCard key={name + owner} name={name} owner={owner} />
        ))}
    </span>
  );
}

export default Repositories;
