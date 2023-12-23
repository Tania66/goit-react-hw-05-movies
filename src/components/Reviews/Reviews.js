import Loader from 'components/Loader/Loader';
import { useFetchMovieReviews } from 'hooks';
import { ListReviews } from './Reviews.styled';

const Reviews = () => {
  const { error, loading, reviews } = useFetchMovieReviews();
  return (
    <div>
      {loading && <Loader />}
      {error && <p>❌ Something went wrong - {error}</p>}
      {reviews && (
        <ListReviews>
          {reviews.length > 0 ? (
            reviews.map(review => (
              <li key={review.id}>
                <h3>{review.author}</h3>
                <p>{review.content}</p>
              </li>
            ))
          ) : (
            <li>We don't have information about reviews</li>
          )}
        </ListReviews>
      )}
    </div>
  );
};

export default Reviews;
