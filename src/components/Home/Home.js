import * as Api from '../services/tmdb-api';
import { useState, useEffect } from 'react';
import MovieList from 'components/MovieList/MovieList';
import './Home.css';

const Home = () => {
    const [movies, setMovies] = useState(null);

    useEffect(() => {
        Api.fetchTrendingMovies().then(data => {
            setMovies(data.results);
        });
    }, []);

    console.log(movies);
    

    return (
        <section>
            <div>
                <h1>Trending today</h1>
                <MovieList movies={movies} />
            </div>
        </section>
    );
}

export default Home;