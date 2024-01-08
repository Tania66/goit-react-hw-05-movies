import { CastList, Character, Inner, Name } from './Cast.styled';
import Loader from 'components/Loader/Loader';
import {
  ErrorMessage,
  ListItem,
} from 'components/MoviesList/MoviesList.styled';
import { useFetchMovieCast } from 'hooks';

const Cast = () => {
  const defaultImg = `https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700`;
  const { error, loading, cast } = useFetchMovieCast();

  return (
    <Inner>
      {loading && <Loader />}
      {error && <ErrorMessage>❌ Something went wrong - {error}</ErrorMessage>}
      {cast && (
        <CastList>
          {cast.length > 0 ? (
            cast.map(item => (
              <ListItem key={item.id}>
                <Name>{item.name}</Name>
                <Character>Character: {item.character}</Character>
                <img
                  src={
                    item.profile_path
                      ? [`https://image.tmdb.org/t/p/w500${item.profile_path}`]
                      : defaultImg
                  }
                  alt={item.name}
                  width={250}
                />
              </ListItem>
            ))
          ) : (
            <li>
              <ErrorMessage>We don't have information about cast</ErrorMessage>
            </li>
          )}
        </CastList>
      )}
    </Inner>
  );
};

export default Cast;
