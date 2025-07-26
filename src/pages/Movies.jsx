import { useEffect, useState } from 'react';
import * as API from '../service/api.js';
import { useParams } from 'react-router-dom';

function Movies() {
  const [movie, setMovie] = useState(null);
  const { id } = useParams(); // якщо ти хочеш отримати movie_id з URL
  // const movieId = id || '1285965'; // для тесту можна дефолтний ID

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const data = await API.getMovie(id);
        setMovie(data);

      } catch (error) {
        console.error('Помилка завантаження фільму:', error);
      }
    };
    console.log("🚀 ~ fetchMovie ~ data):")
        fetchMovie();
  }, [id]);

  return (
    <div>
      <h1>Інформація про фільм</h1>
      {movie ? (
        <div>
          <h2>{movie.title || movie.name}</h2>
          <p>{movie.overview}</p>
          <p>Реліз: {movie.release_date}</p>
        </div>
      ) : (
        <p>Завантаження...</p>
      )}
    </div>
  );
}

export default Movies;