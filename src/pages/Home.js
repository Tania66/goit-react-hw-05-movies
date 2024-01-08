import Loader from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';
import { ErrorMessage } from 'components/MoviesList/MoviesList.styled';
import { useFetchPopular } from 'hooks/useFetchPopular';

const Home = () => {
  const { movies, error, loading } = useFetchPopular();

  return (
    <div>
      {loading && <Loader />}
      {error && <ErrorMessage>❌ Something went wrong - {error}</ErrorMessage>}
      {movies !== null && <MoviesList movies={movies} />}
    </div>
  );
};

export default Home;
