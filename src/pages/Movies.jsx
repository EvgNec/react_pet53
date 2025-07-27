import { useState } from 'react';
import * as API from '../service/api.js';
import { Link, Outlet } from 'react-router-dom';
import SearchForm from 'service/SearchForm/SearchForm.jsx';

function Movies() {
  const [films, setFilms] = useState(null);
  const [searchText, setSearchText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const fetchFilms = async (query) => {
    setIsLoading(true);
    try {
      const data = await API.getSearchMovie(query);
      setFilms(data.results); 
    } catch (error) {
      console.error('Помилка завантаження фільмів:', error);
      setFilms(null);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = (query) => {
    if (!query.trim()) return;
    setSearchText(query);
    fetchFilms(query);
  };

  return (
    <div>
      <h1>Пошук фільмів</h1>
      <SearchForm onSubmit={handleSearch} />

      {isLoading && <p>Завантаження...</p>}

      {films && films.length > 0 ? (
        <ul>
          {films.map(film => (
            <li key={film.id}>
              <Link to={`/movies/${film.id}`}>
                <p>{film.title || film.name}</p>
                <p>{film.overview}</p>
                <p>{film.release_date}</p>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        !isLoading && searchText && <p>Нічого не знайдено для "{searchText}"</p>
      )}

      <Outlet />
    </div>
  );
}

export default Movies;