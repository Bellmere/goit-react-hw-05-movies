import { Route, Routes } from "react-router";
import Navigation from "./Navigation/Navigation";
import { Lazy } from "react-lazy";


const Home = Lazy(() =>
  import('../components/Home/Home' /*webpackChunkName: "Home"*/),
);

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route exact path="/" component={Home}/>
      </Routes>
    </>
  );
};

export default App;
