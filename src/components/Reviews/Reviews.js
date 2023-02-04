import { useState, useEffect } from 'react';
import * as Api from '../../services/tmdb-api';
import { useParams } from 'react-router';
import Loader from 'components/Loader/Loader';
import Section from 'components/Section/Section';
import Rejected from 'components/Error/Error';
import './Reviews.css';

const Status = {
    IDLE: 'idle',
    PENDING: 'pending',
    RESOLVED: 'resolved',
    REJECTED: 'rejected',
  }

const Reviews = () => {
    const {movieId} = useParams();
    const [reviews, setReviews] = useState([]);
    const [status, setStatus] = useState(Status.IDLE);


    useEffect(() => {
        setStatus(Status.PENDING);
        Api.fetchMovieReviews(movieId).then(movie => {
            setReviews(movie);
            setStatus(Status.RESOLVED);
        })
        .catch(error => {
            console.log(error);
            setStatus(Status.REJECTED);
        })

    },[movieId]);

    console.log(reviews);

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
                {reviews.length > 0? (
                    <ul className='reviews__list'>
                        {reviews.map(review => {
                            return (
                                <li className='reviews__item' key={review.id}>
                                    <h3>{review.author}</h3>
                                    <p>{review.content}</p>
                                </li>
                            )
                        })}
                    </ul>
                ) : (<Rejected />)};
            </Section>
        );
    }
};

export default Reviews;