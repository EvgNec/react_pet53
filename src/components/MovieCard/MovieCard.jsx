import { Card, Poster, Title, Score, SectionTitle, Paragraph, InfoSection, GenreTitle, GenreList  } from './MovieCard.styled.js'
import React from 'react'

const MovieCard = ({movie}) => {
  if (!movie) return null;

  const {
    poster_path,
    original_title,
    popularity,
    overview,
    genres = [],
  } = movie;
  return (
    <Card>
   
    <Poster src={`https://image.tmdb.org/t/p/w400${poster_path}`} alt="Movie Poster" />
    <InfoSection>
    <Title>{original_title}</Title>
    <Score>{popularity}</Score>
    <SectionTitle>Overview</SectionTitle>
    <Paragraph>{overview}</Paragraph>
    <GenreTitle>Genres:</GenreTitle>
    <GenreList>{genres.map(genre => genre.name).join(', ')}</GenreList>
    <Paragraph>Comedy</Paragraph>
    </InfoSection>
  </Card>
  )
}

export default MovieCard
