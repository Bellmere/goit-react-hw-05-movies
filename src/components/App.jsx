import { Route, Routes } from "react-router";
import Navigation from "./Navigation/Navigation";
import Home from "../components/Home/Home";
import Movies from "./Movies/Movies";
import MovieDetails from "./MovieDetails/MovieDetails";
import Reviews from "./Reviews/Reviews";
import Cast from "./Cast/Cast";

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />}/>
          <Route path="reviews" element={<Reviews />}/>
        <Route />
        </Route>
        <Route path="/movies" element={<Movies />}/>
      </Routes>
    </>
  );
};

export default App;
