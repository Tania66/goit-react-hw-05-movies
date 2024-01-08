import { Outlet, useLocation } from 'react-router-dom';
import {
  Info,
  Span,
  Wrapp,
  MovieTitle,
  LinksStyle,
  LinkList,
  MovieSubTitle,
  MovieText,
  ContentWrapp,
} from './Pages.styled';
import Loader from 'components/Loader/Loader';
import { useFetchMovieDetails } from 'hooks';
import { useRef } from 'react';
import {
  ErrorMessage,
  ImgPoster,
} from 'components/MoviesList/MoviesList.styled';

const MovieDetails = () => {
  const { movies, loading, error } = useFetchMovieDetails();
  const defaultImg = `https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700`;
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');

  return (
    <Wrapp>
      <LinksStyle to={backLinkHref.current}>Back</LinksStyle>
      {loading && <Loader />}
      {error && <ErrorMessage>❌ Something went wrong - {error}</ErrorMessage>}
      {movies && (
        <>
          <MovieTitle>{movies.title}</MovieTitle>
          <Info>
            <ImgPoster
              src={
                movies.poster_path
                  ? [`https://image.tmdb.org/t/p/w500${movies.poster_path}`]
                  : defaultImg
              }
              alt={movies.title}
              width={250}
            />

            <ContentWrapp>
              <MovieSubTitle>User score:</MovieSubTitle>
              <MovieText>{movies.popularity}</MovieText>
              <MovieSubTitle>Overview</MovieSubTitle>
              <MovieText>{movies.overview}</MovieText>
              <MovieSubTitle>Genre</MovieSubTitle>
              <MovieText>
                {movies.genres.map(genre => (
                  <Span key={genre.id}>{genre.name}</Span>
                ))}
              </MovieText>
            </ContentWrapp>
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
