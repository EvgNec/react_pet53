import { useEffect, useState } from 'react';
// import { Container, Grid, Title } from "./Home.styled.js";
import * as API from '../service/api.js';
import { Link } from 'react-router-dom';

function Home() {
  const [filmTrends, setFilmTrends] = useState([]);

  useEffect(() => {
    const fetchTrends = async () => {
      try {
        const data = await API.getTrend();
        console.log('🚀 ~ fetchTrends ~ data:', data);
        setFilmTrends(data);
      } catch (error) {
        console.error('Помилка при завантаженні трендів:', error);
      }
    };
    fetchTrends();
  }, []);
  return (
    <div>
      <h1>Трендові фільми</h1>
      <ul>
        {filmTrends.map(film => (
          <li key={film.id}>
            <Link to={`/movies/${film.id}`}>{film.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
