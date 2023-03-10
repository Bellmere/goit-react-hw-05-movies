import * as Api from '../../services/tmdb-api';
import { useState, useEffect } from 'react';
import MovieList from 'components/MovieList/MovieList';
import './Home.css';
import Section from 'components/Section/Section';

const Home = () => {
    const [movies, setMovies] = useState(null);

    useEffect(() => {
        Api.fetchTrendingMovies().then(data => {
            setMovies(data.results);
        });
    }, []);
    

    return (
        <Section>
            <h1>Trending today</h1>
            <MovieList movies={movies} />
        </Section>
    );
}

export default Home;