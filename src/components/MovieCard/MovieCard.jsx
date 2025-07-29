import { Card, Poster, Title, Score, SectionTitle, Paragraph, InfoSection, GenreTitle, GenreList  } from './MovieCard.styled.js'
import React from 'react'

const MovieCard = (movie) => {
  return (
    <Card>
   
    <Poster src="https://image.tmdb.org/t/p/w400//epFP29rGrLPseuKxpz3mGKr23Do.jpg" alt="Movie Poster" />
    <InfoSection>
    <Title>{movie.original_title}</Title>
    <Score>{movie.popularity}</Score>
    <SectionTitle>Overview</SectionTitle>
    <Paragraph>{movie.overview}</Paragraph>
    <GenreTitle>Genres:</GenreTitle>
    <GenreList>{movie.genres.map(genre => genre.name).join(', ')}</GenreList>
    <Paragraph>Comedy</Paragraph>
    </InfoSection>
  </Card>
  )
}

export default MovieCard
