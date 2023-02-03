import * as Api from '../services/tmdb-api';
import { useState, useEffect } from 'react';
import { NavLink, Route, useLocation, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Loader from 'components/Loader/Loader';

import './MovieDetails.css';

const Status = {
    IDLE: 'idle',
    PENDING: 'pending',
    RESOLVED: 'resolved',
    REJECTED: 'rejected',
  }

  const BASE_URL = 'https://image.tmdb.org/t/p/w500/';

const MovieDetails = () => {
    const [movieDetail, setMovieDetail] = useState('');
    const [status, setStatus] = useState(Status.IDLE);
    const { movieId } = useParams();

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        setStatus(Status.PENDING);
        Api.fetchAboutMovie(movieId).then(movie => {
            setMovieDetail(movie);
            setStatus(Status.RESOLVED);

        })
        .catch(error => {
            console.log(error);
            setStatus(Status.REJECTED);
        })
    },[movieId]);

    const onBack = () => {
        navigate(location?.state?.from ?? '/');
    }

    const { overview, poster_path, release_date, title, genres } = movieDetail;
    const genrs = genres && genres.map(genr => genr.name).join(', ');
    const releaseData = release_date && release_date.slice(0, 4);

    if (status === Status.PENDING) {
        return <Loader />
    }

    if (status === Status.REJECTED) {
        return <div>Oops something going wrong;(</div>
    }

    if (status === Status.RESOLVED) {
        return (
            <section>
                <div>
                    <div className='movie-details__poster'>
                        <img
                        src={`${BASE_URL}${poster_path}`}
                        alt={title}
                        >
                        </img>
                    </div>
                    <div className='movie-details__content'>
                        <h2>{`${title} (${releaseData})`}</h2>
                        <h3>Overview: </h3>
                        <p>{overview}</p>
                        <h3>Genres: </h3>
                        <p>{genrs}</p>
                    </div>
                </div>
            </section>
        );
    }
}

export default MovieDetails;