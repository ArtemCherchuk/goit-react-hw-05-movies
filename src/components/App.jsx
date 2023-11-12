import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Layout from './Layout/Layout';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const Movies = lazy(() => import('pages/MoviesPage/MoviesPage'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));

export const App = () => {
  return (
    <Layout>
      <Suspense>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/movies" element={<Movies />}></Route>
          <Route path="/movies/:movieId/*" element={<MovieDetails />}></Route>
        </Routes>
      </Suspense>
    </Layout>
  );
};
