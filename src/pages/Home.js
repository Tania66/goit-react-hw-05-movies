import Loader from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';
import { useFetchPopular } from 'hooks/useFetchPopular';

const Home = () => {
  const { movies, error, loading } = useFetchPopular();

  return (
    <div>
      {loading && <Loader />}
      {error && <p>❌ Something went wrong - {error}</p>}
      {movies !== null && <MoviesList movies={movies} />}
    </div>
  );
};

export default Home;
