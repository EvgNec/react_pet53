import { useEffect, useState } from 'react';
// import { Container, Grid, Title } from "./Home.styled.js";
import * as API from '../service/api.js';
import { Link, Outlet, useParams } from 'react-router-dom';

function Home() {
  const [filmTrends, setFilmTrends] = useState([]);
  const { id } = useParams();
  // console.log("🚀 ~ Home ~ id:", id)
  useEffect(() => {
    const fetchTrends = async () => {
      try {
        const data = await API.getTrend(id);
        // console.log('🚀 ~ fetchTrends ~ data:', data);
        setFilmTrends(data);
      } catch (error) {
        console.error('Помилка при завантаженні трендів:', error);
      }
    };
    fetchTrends();
  }, [id]);
  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {filmTrends.map(film => (
          <li key={film.id}>
            <Link to={`/movies/${film.id}`}>
              <p>{film.title || film.name}</p>
            </Link>
          </li>
        ))}
      </ul>
      <Outlet/>
    </div>
  );
}

export default Home;
