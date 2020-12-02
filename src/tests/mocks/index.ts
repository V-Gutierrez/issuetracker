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
          id: 'MDEwOlJlcG9zaXRvcnkzMTU4MDE1NTM=',
          nameWithOwner: 'V-Gutierrez/issuetracker',
          description: 'null',
          stargazerCount: 0,
          forkCount: 0,
          url: 'https://github.com/V-Gutierrez/issuetracker',
          licenseInfo: 'null',
          pullRequests: {
            totalCount: 7,
            nodes: [
              {
                id: 'MDExOlB1bGxSZXF1ZXN0NTI4NzUxNDUy',
                title: 'Chore: fix cards styles',
                url: 'https://github.com/V-Gutierrez/issuetracker/pull/3',
                __typename: 'PullRequest'
              },
              {
                id: 'MDExOlB1bGxSZXF1ZXN0NTI4Nzg1NDc5',
                title: 'Hotfix: fix empty card rendering issue',
                url: 'https://github.com/V-Gutierrez/issuetracker/pull/4',
                __typename: 'PullRequest'
              },
              {
                id: 'MDExOlB1bGxSZXF1ZXN0NTI5NjAwODMx',
                title: 'Chore: add fakedb for debug purposes',
                url: 'https://github.com/V-Gutierrez/issuetracker/pull/5',
                __typename: 'PullRequest'
              },
              {
                id: 'MDExOlB1bGxSZXF1ZXN0NTI5NjQxMjIx',
                title: 'Chore: enable repositories fetching',
                url: 'https://github.com/V-Gutierrez/issuetracker/pull/6',
                __typename: 'PullRequest'
              },
              {
                id: 'MDExOlB1bGxSZXF1ZXN0NTI5ODIxMzQy',
                title: '[WIP] Stats visualization',
                url: 'https://github.com/V-Gutierrez/issuetracker/pull/7',
                __typename: 'PullRequest'
              }
            ],
            __typename: 'PullRequestConnection'
          },
          issues: { totalCount: 0, nodes: [''], __typename: 'IssueConnection' },
          __typename: 'Repository'
        }
      }
    }
  }
];
