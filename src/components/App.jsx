import { Route, Routes } from "react-router";
import Navigation from "./Navigation/Navigation";
import Home from "../components/Home/Home";
import Movies from "./Movies/Movies";
import MovieDetails from "./MovieDetails/MovieDetails";

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/movies/:movieId" element={<MovieDetails />}/>
        <Route path="/movies" element={<Movies />}/>
      </Routes>
    </>
  );
};

export default App;
