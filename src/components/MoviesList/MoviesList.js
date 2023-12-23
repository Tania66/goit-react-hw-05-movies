import { Link, useLocation } from 'react-router-dom';
import { List, Title, ListItem } from './MoviesList.styled';

const MoviesList = ({ movies }) => {
  const defaultImg = `https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700`;
  const location = useLocation();

  return (
    <List>
      {movies.length > 0 ? (
        movies.map(movieData => (
          <ListItem key={movieData.id}>
            <Link to={`/movies/${movieData.id}`} state={{ from: location }}>
              <Title>{movieData.title}</Title>
              <img
                src={
                  movieData.poster_path
                    ? [
                        `https://image.tmdb.org/t/p/w500${movieData.poster_path}`,
                      ]
                    : defaultImg
                }
                alt={movieData.title}
                width={250}
              />
            </Link>
          </ListItem>
        ))
      ) : (
        <li>Sorry, not found film</li>
      )}
    </List>
  );
};

export default MoviesList;
