import React from 'react';
import { render, screen } from '@testing-library/react';
import StatsCard from 'components/modules/RepositoryCard/StatsCard';

describe('StatsCard component', () => {
  it('should render properly based on props', () => {
    const mockedProps = {
      id: '_id_',
      title: 'Repository Issue',
      url: '_url_'
    };

    render(<StatsCard {...mockedProps} type="issue" />);

    const wrapper = screen.getByTestId('statscard-wrapper');
    const linkToUrl = screen.getByTestId('statscard-anchor');
    const title = screen.getByTestId('statscard-title');

    expect(wrapper).toHaveClass('issue__card');
    expect(linkToUrl).toHaveAttribute('href', mockedProps.url);
    expect(title).toHaveTextContent(mockedProps.title);
  });

  it('should render properly based on props', () => {
    const mockedProps = {
      id: '_id_',
      title: 'Repository PR',
      url: '_url_'
    };

    render(<StatsCard {...mockedProps} type="pull_request" />);

    const wrapper = screen.getByTestId('statscard-wrapper');
    const linkToUrl = screen.getByTestId('statscard-anchor');
    const title = screen.getByTestId('statscard-title');

    expect(wrapper).toHaveClass('pullrequest__card');
    expect(linkToUrl).toHaveAttribute('href', mockedProps.url);
    expect(title).toHaveTextContent(mockedProps.title);
  });
});
