import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import {
  GetRepositoryInfoQuery,
  GetRepositoryInfoQueryVariables
} from 'queries/generated/types';

export const GetRepositoryInfoDocument = gql`
  query getRepositoryInfo($owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
      id
      nameWithOwner
      description
      stargazerCount
      forkCount
      url
      licenseInfo {
        name
      }
      pullRequests(last: 5) {
        totalCount
        nodes {
          id
          title
          url
        }
      }
      issues(last: 5) {
        totalCount
        nodes {
          id
          title
          url
        }
      }
    }
  }
`;

/**
 * __useGetRepositoryInfoQuery__
 *
 * To run a query within a React component, call `useGetRepositoryInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRepositoryInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRepositoryInfoQuery({
 *   variables: {
 *      owner: // value for 'owner'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useGetRepositoryInfoQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetRepositoryInfoQuery,
    GetRepositoryInfoQueryVariables
  >
) {
  return Apollo.useQuery<
    GetRepositoryInfoQuery,
    GetRepositoryInfoQueryVariables
  >(GetRepositoryInfoDocument, baseOptions);
}
export function useGetRepositoryInfoLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetRepositoryInfoQuery,
    GetRepositoryInfoQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    GetRepositoryInfoQuery,
    GetRepositoryInfoQueryVariables
  >(GetRepositoryInfoDocument, baseOptions);
}
export type GetRepositoryInfoQueryHookResult = ReturnType<
  typeof useGetRepositoryInfoQuery
>;
export type GetRepositoryInfoLazyQueryHookResult = ReturnType<
  typeof useGetRepositoryInfoLazyQuery
>;
export type GetRepositoryInfoQueryResult = Apollo.QueryResult<
  GetRepositoryInfoQuery,
  GetRepositoryInfoQueryVariables
>;
