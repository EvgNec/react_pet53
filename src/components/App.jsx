import { Container, Header, Link } from './App.styled';
import { Route, Routes } from 'react-router-dom';
import Movies from 'pages/Movies';
import Home from 'pages/Home';
import Cast from './Cast';
import Reviews from './Reviews';
import NotFound from 'pages/NotFound';
import MovieDetails from '../pages/MovieDetails';

export const App = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movies" element={<Movies />}>        

          
        </Route>
        <Route path="/movies/:id" element={<MovieDetails />}>
        <Route path="cast" element={<Cast />} />
        <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  );
};
