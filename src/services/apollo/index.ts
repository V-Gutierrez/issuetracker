import { ApolloClient, InMemoryCache } from '@apollo/client';

export const githubApi = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_GITHUB_API,
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`
  },
  cache: new InMemoryCache()
});
