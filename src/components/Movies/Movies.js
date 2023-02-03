import * as Api from '../services/tmdb-api';
import { useState, useEffect } from 'react';
import SearchForm from 'components/SearchForm/SearchForm';
import MovieList from 'components/MovieList/MovieList';
import Loader from 'components/Loader/Loader';
import PropTypes from 'prop-types';

import './Movies.css';

const Status = {
    IDLE: 'idle',
    PENDING: 'pending',
    RESOLVED: 'resolved',
    REJECTED: 'rejected',
  }

const Movies = () => {
    const [movies, setMovies] = useState(null);
    const [inputSearch, setInputSearch] = useState('');
    const [status, setStatus] = useState(Status.IDLE);

    useEffect(() => {
        if (!inputSearch) {
            return;
        }

        setStatus(Status.PENDING);

        Api.searchMovie(inputSearch).then(data => {
            if (data.results.length > 0) {
                setStatus(Status.RESOLVED);
                setMovies(data.results);
                console.log(movies);
                return;
            }

            setStatus(Status.REJECTED);

        });
    }, [inputSearch, movies]);

    const handleSearchSubmit = inputSearch => {
        setInputSearch(inputSearch);
      };



    if (status === Status.IDLE) {
        return (
            <section>
                <div>
                <SearchForm onSubmit={handleSearchSubmit} />
                </div>
            </section>
        );
    }

    if (status === Status.PENDING) {
        <SearchForm onSubmit={handleSearchSubmit} />
        return (
            <section>
                <div>
                <SearchForm onSubmit={handleSearchSubmit} />
                <Loader />
                </div>
            </section>
        );
    }

    if (status === Status.REJECTED) {
        <SearchForm onSubmit={handleSearchSubmit} />
        return (
            <section>
                <div>
                <SearchForm onSubmit={handleSearchSubmit} />
                <div>Oops something going wrong;(</div>
                </div>
            </section>
        );
    }

    if (status === Status.RESOLVED) {
        return (
            <section>
                <div>
                <SearchForm onSubmit={handleSearchSubmit} />
                <MovieList movies={movies} />
                </div>
            </section>
        );
    }
}

export default Movies;