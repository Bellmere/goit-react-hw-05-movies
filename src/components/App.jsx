import { Route, Routes } from "react-router";
import { lazy, Suspense } from "react";
import Navigation from "./Navigation/Navigation";
import Loader from "./Loader/Loader";

const Home = lazy(() => import("../page/Home/Home"));
const Movies = lazy(() => import("../page/Movies/Movies"));
const MovieDetails= lazy(() => import("../page/MovieDetails/MovieDetails"));
const Cast = lazy(() => import("./Cast/Cast"));
const Reviews = lazy(() => import("./Reviews/Reviews"));


const App = () => {
  return (
    <>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route index element={<Home />}/>
          <Route path="/movies" element={<Movies />}/>
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />}/>
            <Route path="reviews" element={<Reviews />}/>
          <Route />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
