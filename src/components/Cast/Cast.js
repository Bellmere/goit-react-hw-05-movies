import { useState, useEffect } from 'react';
import * as Api from '../../services/tmdb-api';
import { useParams } from 'react-router';
import Loader from 'components/Loader/Loader';
import Section from 'components/Section/Section';
import Rejected from 'components/Error/Error';

import brokenImage from '../../images/broken_img.png';

import './Cast.css';

const Status = {
    IDLE: 'idle',
    PENDING: 'pending',
    RESOLVED: 'resolved',
    REJECTED: 'rejected',
  }

  const Cast = () => {
    const {movieId} = useParams();
    const [cast, setCast] = useState([]);
    const [status, setStatus] = useState(Status.IDLE);

    useEffect(() => {
        setStatus(Status.PENDING);
        Api.fetchMovieCredits(movieId).then(item => {
            setCast(item);
            setStatus(Status.RESOLVED);
        })
        .catch(error => {
            console.log(error);
            setStatus(Status.REJECTED);
        })
    },[movieId]);

    if (status === Status.PENDING) {
        return <Loader />
    }

    if (status === Status.REJECTED) {
        return (
            <Section>
                <Rejected />
            </Section>
        );
    }

    if (status === Status.RESOLVED) {
        return (
                <Section>
                    <ul className='cast__list'>
                        {cast.map((item, index) => {
                            return (
                                <li className='cast__item' key={index}>
                                    <div className='cast__photo'>
                                        {item.profile_path? 
                                        (<img
                                            src={`https://image.tmdb.org/t/p/w300${item.profile_path}`}
                                            alt={`${item.name}`}
                                        >
                                        </img>)
                                        : 
                                        (<img
                                            src={brokenImage}
                                            alt={`${item.name}`}
                                        >
                                        </img>)}
                                    </div>
                                    <div className='cast__content'>
                                        <h3>Name: {item.name}</h3>
                                        <p>Character: {item.character}</p>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </Section>
             );
    }

  }

  export default Cast;