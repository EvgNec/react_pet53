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
      <h1>Trending today</h1>
      <ul>
        {filmTrends.map(film => (
          <li key={film.id}>
            <Link to={`${film.id}`}>
              <p>{film.title || film.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
