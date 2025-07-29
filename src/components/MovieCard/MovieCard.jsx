import { Card, Poster, Title, Score, SectionTitle, Paragraph, InfoSection  } from './MovieCard.styled.js'
import React from 'react'

const MovieCard = () => {
  return (
    <Card>
   
    <Poster src="https://image.tmdb.org/t/p/w400//epFP29rGrLPseuKxpz3mGKr23Do.jpg" alt="Movie Poster" />
    <InfoSection>
    <Title>Title</Title>
    <Score>User Score</Score>
    <SectionTitle>Overview</SectionTitle>
    <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Paragraph>
    <SectionTitle>Genres:</SectionTitle>
    <Paragraph>Comedy</Paragraph>
    </InfoSection>
  </Card>
//     <div>
//       <img src="https://image.tmdb.org/t/p/w400//epFP29rGrLPseuKxpz3mGKr23Do.jpg" alt="tttt"/>
//       <h1>Title</h1>
// <h3> User Score </h3>
// <h2>Overview</h2>
// <p>loremvbxbxvbxvbvxbxvcbxbxxb</p>
// <h2>Genres:</h2>
// <p>Comedy</p>
//     </div>
  )
}

export default MovieCard
