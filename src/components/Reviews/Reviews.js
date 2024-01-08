import Loader from 'components/Loader/Loader';
import { useFetchMovieReviews } from 'hooks';
import { ListReviews, ReviewsTitle, ReviewsText } from './Reviews.styled';
import { ErrorMessage } from 'components/MoviesList/MoviesList.styled';

const Reviews = () => {
  const { error, loading, reviews } = useFetchMovieReviews();
  return (
    <div>
      {loading && <Loader />}
      {error && <ErrorMessage>❌ Something went wrong - {error}</ErrorMessage>}
      {reviews && (
        <ListReviews>
          {reviews.length > 0 ? (
            reviews.map(review => (
              <li key={review.id}>
                <ReviewsTitle>{review.author}</ReviewsTitle>
                <ReviewsText>{review.content}</ReviewsText>
              </li>
            ))
          ) : (
            <li>
              {' '}
              <ErrorMessage>
                We don't have information about reviews
              </ErrorMessage>
            </li>
          )}
        </ListReviews>
      )}
    </div>
  );
};

export default Reviews;
