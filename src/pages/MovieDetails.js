import { Outlet, useLocation } from 'react-router-dom';
import {
  Info,
  Span,
  Wrapp,
  MovieTitle,
  LinksStyle,
  LinkList,
} from './Pages.styled';
import Loader from 'components/Loader/Loader';
import { useFetchMovieDetails } from 'hooks';

const MovieDetails = () => {
  const { movies, loading, error } = useFetchMovieDetails();
  const defaultImg = `https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700`;
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

  return (
    <Wrapp>
      <LinksStyle to={backLinkHref}>Back</LinksStyle>
      {loading && <Loader />}
      {error && <p>❌ Something went wrong - {error}</p>}
      {movies && (
        <>
          <MovieTitle>{movies.title}</MovieTitle>
          <Info>
            <img
              src={
                movies.poster_path
                  ? [`https://image.tmdb.org/t/p/w500${movies.poster_path}`]
                  : defaultImg
              }
              alt={movies.title}
              width={250}
            />

            <div>
              <h2>User score:</h2>
              <p>{movies.popularity}</p>
              <h2>Overview</h2>
              <p>{movies.overview}</p>
              <h2>Genre</h2>
              <p>
                {movies.genres.map(genre => (
                  <Span key={genre.id}>{genre.name}</Span>
                ))}
              </p>
            </div>
          </Info>

          <LinkList>
            <li>
              <LinksStyle to="cast">Cast</LinksStyle>
            </li>
            <li>
              <LinksStyle to="reviews">Reviews</LinksStyle>
            </li>
          </LinkList>
        </>
      )}
      <Outlet />
    </Wrapp>
  );
};

export default MovieDetails;
