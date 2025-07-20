import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import * as API from '../service/api.js';

function Home() {
  const [filmTrends, setFilmTrends] = useState('');

  useEffect(() => {
    const fetchTrends = async () => {
      try {
        const data = await API.getTrend();
        console.log("🚀 ~ fetchTrends ~ data:", data)
        setFilmTrends(data);
      } catch (error) {
        console.error('Помилка при завантаженні трендів:', error);
      }
    };

    fetchTrends();
  }, []);
  return (
    <div>
      {filmTrends.map(film => (
        <div key={film.id}>{film.title}</div>
      ))}
    </div>
  )
}

export default Home
