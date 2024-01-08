// import { useSearchParams } from 'react';
import Loader from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';
import { ErrorMessage } from 'components/MoviesList/MoviesList.styled';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { useFetchSearchMovies } from 'hooks';

const Movies = () => {
  const { search, error, loading, handleSubmit } = useFetchSearchMovies();

  return (
    <div>
      <SearchForm onSearch={handleSubmit} />
      {loading && <Loader />}
      {error && <ErrorMessage>❌ Something went wrong - {error}</ErrorMessage>}
      {search && <MoviesList movies={search} />}
    </div>
  );
};

export default Movies;
