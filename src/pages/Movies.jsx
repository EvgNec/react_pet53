import { useState } from 'react';
import * as API from '../service/api.js';
import { Link, Outlet } from 'react-router-dom';
import SearchForm from 'service/SearchForm/SearchForm.jsx';

function Movies() {
  // const [movie, setMovie] = useState(null);
  const [films, setFilms] = useState(null);
  const [searchText, setSearchText] = useState('');

  const handleSearch = searchText => {
    setSearchText(searchText);
    const fetchSearchMovie = async () => {
      try {
        const data = await API.getSearchMovie(searchText);
        setFilms(data);
      } catch (error) {
        console.error('Помилка завантаження фільму:', error);
      }
    };
    fetchSearchMovie();
  };
  return (
    <div>
      <h1>Інформація про фільм</h1>
      <SearchForm onSubmit={handleSearch} />
      {films ? (
        <div>
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
        </div>
      ) : (
        <p>Завантаження...</p>
      )}
      <Outlet />
    </div>
  );
}

export default Movies;
