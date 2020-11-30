import React from 'react';
import {
  render,
  screen,
  waitForElementToBeRemoved
} from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';

import RepositoryCard from 'components/modules/RepositoryCard';
import { GetRepositoryInfoDocument } from 'queries/generated/hooks';
import userEvent from '@testing-library/user-event';

describe('RepositoryCard component', () => {
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

  it('should render properly based on passed props', async () => {
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
      const issuesTooltipWrapper = screen.getByTestId(
        'repositorycard-issuestooltip'
      );
      const pullRequestsTooltipWrapper = screen.getByTestId(
        'repositorycard-pullrequeststooltip'
      );

      expect(repositoryCardTitle).toBeTruthy();
      expect(pullRequestsTooltipWrapper).toBeTruthy();
      expect(issuesTooltipWrapper).toBeTruthy();
      expect(repositoryCardStatsContainer).toBeTruthy();
      expect(repositoryCardStatsContainer.hasChildNodes()).toBe(true);
      expect(repositoryCardStatsContainer.children.length).toEqual(3);
    });

    expect.assertions(7);
  });
  it('should render tooltips', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <RepositoryCard name="issuetracker" owner="v-gutierrez" />
      </MockedProvider>
    );
    await waitForElementToBeRemoved(
      screen.getByTestId('suspense-default-fallback')
    ).then(() => {
      const issuesTooltipWrapper = screen.getByTestId(
        'repositorycard-issuestooltip'
      );
      const pullRequestsTooltipWrapper = screen.getByTestId(
        'repositorycard-pullrequeststooltip'
      );

      expect(issuesTooltipWrapper.children.length).toBe(2);
      expect(pullRequestsTooltipWrapper.children.length).toBe(2);

      userEvent.hover(issuesTooltipWrapper);
      //Tooltip is rendered so a new child element is inserted
      expect(issuesTooltipWrapper.children.length).toBe(3);
      userEvent.hover(pullRequestsTooltipWrapper);
      //Tooltip is rendered so a new child element is inserted
      expect(pullRequestsTooltipWrapper.children.length).toBe(3);
    });
  });

  expect.assertions(2);
});
