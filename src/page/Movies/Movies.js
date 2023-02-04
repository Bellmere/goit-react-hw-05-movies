import * as Api from '../../services/tmdb-api';
import { useState, useEffect } from 'react';
import SearchForm from 'components/SearchForm/SearchForm';
import MovieList from 'components/MovieList/MovieList';
import Loader from 'components/Loader/Loader';
import PropTypes from 'prop-types';
import Section from 'components/Section/Section';
import Rejected from 'components/Error/Error';

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
                return;
            }

            setStatus(Status.REJECTED);

        });
    }, [inputSearch]);

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
            <Section>
                <SearchForm onSubmit={handleSearchSubmit} />
                <Loader />
            </Section>
        );
    }

    if (status === Status.REJECTED) {
        <SearchForm onSubmit={handleSearchSubmit} />
        return (
            <Section>
                <SearchForm onSubmit={handleSearchSubmit} />
                <Rejected />
            </Section>
        );
    }

    if (status === Status.RESOLVED) {
        return (
            <Section>
                <SearchForm onSubmit={handleSearchSubmit} />
                <MovieList movies={movies} />
            </Section>
        );
    }
}

Movies.porpTypes = {
    inputSearch: PropTypes.string.isRequired,
}

export default Movies;