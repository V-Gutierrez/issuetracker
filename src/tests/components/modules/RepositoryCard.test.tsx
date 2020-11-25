import { render, screen } from '@testing-library/react';
import RepositoryCard from '../../../components/modules/RepositoryCard';

describe('RepositoryCard component', () => {
  it('should render properly based on passed props', () => {
    const repositorySample = {
      repositoryName: 'IssueTracker',
      stars: 2,
      issues: 5,
      pullRequests: 3
    };

    render(<RepositoryCard {...repositorySample} />);

    const repositoryCardName = screen.getByTestId('repositorycard-name');
    const repositoryCardStars = screen.getByTestId('repositorycard-stars');
    const repositoryCardPullRequests = screen.getByTestId(
      'repositorycard-pullrequests'
    );
    const repositoryIssues = screen.getByTestId('repositorycard-issues');

    expect(repositoryCardName.innerHTML).toEqual(
      repositorySample.repositoryName
    );
    expect(+repositoryCardStars.innerHTML).toEqual(repositorySample.stars);
    expect(+repositoryCardPullRequests.innerHTML).toEqual(
      repositorySample.pullRequests
    );
    expect(+repositoryIssues.innerHTML).toEqual(repositorySample.issues);
  });
});
