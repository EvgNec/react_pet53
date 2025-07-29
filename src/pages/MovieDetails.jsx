import React, { useEffect, useState } from 'react'
import BackButton from '../service/BackButton'
import MovieCard from 'components/MovieCard/MovieCard'
import { useParams } from 'react-router-dom';
import * as API from '../service/api.js';

const MovieDetails = () => {
  const { id } = useParams(); 
    const [movie, setMovie] = useState(null);
    console.log("🚀 ~ MovieDetails ~ movie:", movie)
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
<BackButton/>
<MovieCard movie={movie}/>
     
    </div>
  )
}

export default MovieDetails
