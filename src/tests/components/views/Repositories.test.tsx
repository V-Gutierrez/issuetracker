import { MockedProvider } from '@apollo/client/testing';
import { render, screen } from '@testing-library/react';
import Repositories from 'components/views/Repositories';
import { queryMock } from 'tests/mocks';

describe('Repositories View Component', () => {
  it('should render properly based on props', () => {
    const mockedRepositories = [
      { id: '__id__', name: 'IssueTracker', owner: 'v-gutierrez' }
    ];

    render(
      <MockedProvider mocks={queryMock} addTypename={false}>
        <Repositories repositories={mockedRepositories} />
      </MockedProvider>
    );

    const wrapper = screen.getByTestId('repositories-wrapper');

    expect(wrapper).toBeTruthy();
    expect(wrapper.hasChildNodes()).toBe(true);
    expect(wrapper.children.length).toEqual(mockedRepositories.length);
  });
});
