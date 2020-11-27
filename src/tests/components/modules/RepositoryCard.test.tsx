import React from 'react';
import {
  render,
  screen,
  waitForElementToBeRemoved
} from '@testing-library/react';
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
          data: {}
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

    await waitForElementToBeRemoved(
      screen.getByTestId('suspense-default-fallback')
    ).then(() => {
      const repositoryCardTitle = screen.getByTestId('repositorycard-title');
      const repositoryCardStatsContainer = screen.getByTestId(
        'repositorycard-stats'
      );

      expect(repositoryCardTitle).toBeTruthy();
      expect(repositoryCardStatsContainer).toBeTruthy();
      expect(repositoryCardStatsContainer.hasChildNodes()).toBe(true);
      expect(repositoryCardStatsContainer.children.length).toEqual(3);
    });

    expect.assertions(5);
  });
});
