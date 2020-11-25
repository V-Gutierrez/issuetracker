import React from 'react';
import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';

import RepositoryCard from 'components/modules/RepositoryCard';

describe('RepositoryCard component', () => {
  it('should render properly based on passed props', () => {
    render(
      <MockedProvider>
        <RepositoryCard name="issuetracker" owner="v-gutierrez" />
      </MockedProvider>
    );

    const cardContainer = screen.getByTestId('repositorycard-wrapper');

    expect(cardContainer).toBeTruthy();
  });
});
