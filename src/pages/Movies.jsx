import { useEffect, useState } from 'react';
import * as API from '../service/api.js';
import { Outlet, useParams } from 'react-router-dom';
import SearchBox from 'service/Search/SearchBox.jsx';
import SearchForm from 'service/SearchForm/SearchForm.jsx';

function Movies() {
  const [movie, setMovie] = useState(null);
  const [film, setFilm] = useState(null);
  const { id } = useParams(); // якщо ти хочеш отримати movie_id з URL
  // const movieId = id || '1285965'; // для тесту можна дефолтний ID

  const [searchText, setSearchText] = useState('')

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

  const handleSearch = (searchText) => {
		setSearchText(searchText)
	}
  const filter = (searchText) => {
		setSearchText(searchText);
    const fetchSearchMovie = async () => {
    try {
      const data = await API.getSearchMovie(id);
      setFilm(data);

    } catch (error) {
      console.error('Помилка завантаження фільму:', error);
    }
	}
  fetchSearchMovie();
}

  return (
    <div>
      <h1>Інформація про фільм</h1>
      <SearchBox onChange={filter} />
      <SearchForm onSubmit={handleSearch} />
      {movie ? (
        <div>
          <h2>{movie.title || movie.name}</h2>
          <p>{movie.overview}</p>
          <p>Реліз: {movie.release_date}</p>
        </div>
      ) : (
        <p>Завантаження...</p>
      )}
      {film ? (
        <div>
          <h2>{film.title || movie.name}</h2>
          <p>{film.overview}</p>
          <p>Реліз: {film.release_date}</p>
        </div>
      ) : (
        <p>Завантаження...</p>
      )}
      <Outlet/>
    </div>
  );
}

export default Movies;