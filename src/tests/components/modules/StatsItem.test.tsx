import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import StatsItem from 'components/modules/RepositoryCard/StatsItem';
import { queryMock } from 'tests/mocks';

describe('StatsItem component', () => {
  it('should render correctly based on props', () => {
    render(
      <StatsItem
        dataset={queryMock[0].result.data.repository.issues}
        type="issue"
      />
    );

    const wrapper = screen.getByTestId('statsitem-issuestooltip');

    expect(wrapper).toBeTruthy();
  });

  it('should render correctly based on props', () => {
    render(
      <StatsItem
        dataset={queryMock[0].result.data.repository.pullRequests}
        type="pull_request"
      />
    );

    try {
      expect(screen.getByTestId('statsitem-issuestooltip')).toBeTruthy();
    } catch (e) {
      const wrapper = screen.getByTestId('statsitem-pullrequeststooltip');
      expect(wrapper).toBeTruthy();
    }

    expect.assertions(1);
  });

  it('should render tooltip', () => {
    render(
      <StatsItem
        dataset={queryMock[0].result.data.repository.pullRequests}
        type="pull_request"
      />
    );
    const wrapper = screen.getByTestId('statsitem-pullrequeststooltip');

    userEvent.hover(wrapper);
    expect(screen.getByTestId('statsitem-nodeslist')).toBeTruthy();
  });
});
