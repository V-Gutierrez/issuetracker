import 'styles/main.scss';
import { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/react-hooks';
import { githubApi } from 'services/apollo';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={githubApi}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
