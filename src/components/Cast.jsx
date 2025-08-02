import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as API from '../service/api.js';

function Cast() {
  const { id } = useParams(); 
  const [movie, setMovie] = useState(null);
    useEffect(() => {
      const fetchMovie = async () => {
        try {
          const data = await API.Reviews(id);
          setMovie(data);
  
        } catch (error) {
          console.error('Помилка завантаження фільму:', error);
        }
      };
      fetchMovie();
    }, [id]);
  return (
    <div>
{movie && movie.length > 0 ? (
  <ul>
    {movie?.map(film => (
      <li key={film.id}>
              <p><strong>Author:</strong> {film.author}</p>
              <p><strong>Rating:</strong> {film.author_details?.rating ?? '—'}</p>
              <p><strong>Comment:</strong> {film.content}</p>
              <hr />
            </li>
    ))}
  </ul>
) : (
        <p>Нічого не знайдено</p>
      )
}
    </div>
  )
}
export default Cast
