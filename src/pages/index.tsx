import useAxios from 'axios-hooks';
import Suspense from 'components/modules/Suspense';
import Repositories from 'components/views/Repositories';

export default function Home() {
  const [{ data, loading }] = useAxios(process.env.NEXT_PUBLIC_FKDB_API);

  return (
    <Suspense loadingState={loading}>
      <Repositories repositories={data?.curated_repositories} />
    </Suspense>
  );
}
