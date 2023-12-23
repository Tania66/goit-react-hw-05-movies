import { useEffect, useState } from 'react';
import { fetchTrending } from 'services/api';

export const useFetchPopular = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTrend = async () => {
      try {
        setLoading(true);
        const response = await fetchTrending();
        setMovies(response.results);
      } catch (error) {
        setError('something wrong(');
      } finally {
        setLoading(false);
      }
    };
    fetchTrend();
  }, []);

  return { movies, error, loading };
};
