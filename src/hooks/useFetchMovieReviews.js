import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { moviesReviews } from 'services/api';

export const useFetchMovieReviews = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      if (!movieId) return;
      try {
        setLoading(true);
        const data = await moviesReviews(movieId);
        setReviews(data.results);
      } catch (error) {
        setError('something wrong(');
      } finally {
        setLoading(false);
      }
    };
    fetchCast();
  }, [movieId]);
  return { error, loading, reviews };
};
