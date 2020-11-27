import Repositories from 'components/views/Repositories';
import { curatedRepositories } from 'assets/data/repositories';

export default function Home() {
  return <Repositories repositories={curatedRepositories} />;
}
