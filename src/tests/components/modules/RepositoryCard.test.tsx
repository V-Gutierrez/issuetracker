import React from 'react';
import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';

import RepositoryCard from 'components/modules/RepositoryCard';
import { GetRepositoryInfoDocument } from 'queries/generated/hooks';

describe('RepositoryCard component', () => {
  it('should render properly based on passed props', async () => {
    const mocks = [
      {
        request: {
          query: GetRepositoryInfoDocument,
          variables: {
            name: 'issuetracker',
            owner: 'v-gutierrez'
          }
        },
        result: {
          data: {
            repository: {
              id: '__id',
              nameWithOwner: 'V-Gutierrez/issuetracker',
              stargazerCount: 0,
              forkCount: 0,
              url: 'https://github.com/V-Gutierrez/issuetracker',
              pullRequests: {
                totalCount: 0
              },
              issues: {
                totalCount: 0
              }
            }
          }
        }
      }
    ];

    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <RepositoryCard name="issuetracker" owner="v-gutierrez" />
      </MockedProvider>
    );

    const cardContainer = screen.getByTestId('repositorycard-wrapper');

    expect(cardContainer).toBeTruthy();
  });
});
