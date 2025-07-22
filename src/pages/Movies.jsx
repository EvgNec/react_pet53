import { useEffect, useState } from 'react';
import * as API from '../service/api.js';
import { Link } from 'react-router-dom';


function Movies(id) {
    const [film, setFilm] = useState([]);
  useEffect(() => {
    const getMovie = async () => {
      try {
        const data = await API.getMovie(id);
        console.log('🚀 ~ fetchTrends ~ data:', data);
        setFilm(data);
      } catch (error) {
        console.error('Помилка при завантаженні трендів:', error);
      }
    };
    getMovie(83533);
  }, [id]);

  console.log('movies');
  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {film.map(film => (
          <li key={film.id}>
            <Link to={`/movies/${film.id}`}>{film.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Movies


