import { GetRepositoryInfoDocument } from 'queries/generated/hooks';

export const queryMock = [
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
