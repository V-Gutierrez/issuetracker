import React from 'react';
import RepositoryCard from 'components/modules/RepositoryCard';

interface RepositoryNameAndOwnerDTO {
  id: string;
  name: string;
  owner: string;
}

interface RepositoriesProps {
  repositories: RepositoryNameAndOwnerDTO[];
}

function Repositories({ repositories }: RepositoriesProps) {
  return (
    <span className="repositories" data-testid="repositories-wrapper">
      {repositories?.map(({ id, name, owner }) => (
        <RepositoryCard key={id} name={name} owner={owner} />
      ))}
    </span>
  );
}

export default Repositories;
