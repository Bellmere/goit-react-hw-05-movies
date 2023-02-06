import * as Api from '../../services/tmdb-api';
import { useState, useEffect, Suspense } from 'react';
import { NavLink, Outlet, useLocation, Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { HiArrowLeft } from "react-icons/hi";
import Loader from 'components/Loader/Loader';
import Rejected from 'components/Error/Error';
import Section from 'components/Section/Section';
import brokenImage from '../../images/broken_img.png';

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

    const { overview, poster_path, release_date, title, genres } = movieDetail;
    const genrs = genres && genres.map(genr => genr.name).join(', ');
    const releaseData = release_date && release_date.slice(0, 4);
    const cameBack = location.state?.from ?? '/';
    console.log(cameBack);

    if (status === Status.PENDING) {
        return <Loader />
    }

    if (status === Status.REJECTED) {
        return (
            <Section>
                <Link className='movie-details__btn' to={cameBack}>
                    <HiArrowLeft/>
                </Link>
                <Rejected />
            </Section>
        );
    }

    if (status === Status.RESOLVED) {
        return (
            <>
                <Section>
                    <Link className='movie-details__btn' to={cameBack}>
                        <HiArrowLeft/>
                    </Link>
                    <div className='movie-details__poster'>
                        {poster_path? (
                        <img
                        src={`${BASE_URL}${poster_path}`}
                        alt={title}
                        >
                        </img>) : (
                        <img
                        src={brokenImage}
                        alt={title}
                        >
                        </img>)}
                    </div>
                    <div className='movie-details__content'>
                        <h2>{`${title} (${releaseData})`}</h2>
                        <h3>Overview: </h3>
                        <p>{overview}</p>
                        <h3>Genres: </h3>
                        <p>{genrs}</p>
                    </div>
                </Section>
                <Section>
                        <h2 className='aditional__title'>Aditional information</h2>
                        <ul className='navigation__list'>
                            <li className='navigation__item'>
                            <NavLink
                                to={`/movies/${movieId}/reviews`}
                                className={({ isActive }) => isActive? "navigation__link--active": 'navigation__link'}
                                state={{from: cameBack}}
                            >
                                Reviews
                            </NavLink>
                            </li>
                            <li className='navigation__item'>
                            <NavLink
                                to={`/movies/${movieId}/cast`}
                                className={({ isActive }) => isActive? "navigation__link--active": 'navigation__link'}
                                state={{from: cameBack}}
                            >
                                Cast
                            </NavLink>
                            </li>
                        </ul>
                        <hr />
                        <Suspense fallback={<Loader />}>
                            <Outlet />
                        </Suspense>
                </Section>
            </>
        );
    }
}

export default MovieDetails;