import * as Api from '../../services/tmdb-api';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
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
    const [inputSearch, setInputSearch] = useState(() => {
        const prevSearch = sessionStorage.getItem('prevSearch');
        return JSON.parse(prevSearch) ?? '';
      });

    const [status, setStatus] = useState(Status.IDLE);

    const [movies, setMovies] = useState(() => {
        const groups = sessionStorage.getItem('groups');
        return JSON.parse(groups) ?? [];
      });

    const location = useLocation();


    useEffect(() => {
        sessionStorage.setItem('groups', JSON.stringify(movies));
        sessionStorage.setItem('prevSearch', JSON.stringify(inputSearch));
      }, [movies, inputSearch]);
      

      useEffect(() => {
        if (location.groupsname) {
          setMovies(location.groupsname);
          setInputSearch(location.groupsname);
        }
      }, [location.groupsname]);


    useEffect(() => {
        if (!inputSearch) {
            return;
        }

        setStatus(Status.PENDING);

        Api.searchMovie(inputSearch).then(data => {
            if (data.results.length > 0) {
                setMovies(data.results);
                setStatus(Status.RESOLVED);
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
            <Section>
                <SearchForm onSubmit={handleSearchSubmit} />
                {movies && <MovieList movies={movies} />}
            </Section>
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
                <MovieList movies={movies} prevLocation={location} />
            </Section>
        );
    }
}

Movies.porpTypes = {
    inputSearch: PropTypes.string.isRequired,
}

export default Movies;