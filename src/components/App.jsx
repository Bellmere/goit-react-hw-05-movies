import { Route, Routes } from "react-router";
import Navigation from "./Navigation/Navigation";
import Home from "../components/Home/Home";
import Movies from "./Movies/Movies";

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/movies" element={<Movies />}/>
      </Routes>
    </>
  );
};

export default App;
