import { CastList, Character, Inner, Name } from './Cast.styled';
import Loader from 'components/Loader/Loader';
import { useFetchMovieCast } from 'hooks';

const Cast = () => {
  const defaultImg = `https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700`;
  const { error, loading, cast } = useFetchMovieCast();

  return (
    <Inner>
      {loading && <Loader />}
      {error && <p>❌ Something went wrong - {error}</p>}
      {cast && (
        <CastList>
          {cast.length > 0 ? (
            cast.map(item => (
              <li key={item.id}>
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
              </li>
            ))
          ) : (
            <li>We don't have information about cast</li>
          )}
        </CastList>
      )}
    </Inner>
  );
};

export default Cast;
