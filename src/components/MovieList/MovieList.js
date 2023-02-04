import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import './MovieList.css';

export default function MovieList({movies}) {
    const location = useLocation();
    return (
        <ul className='movies__list'>
            {movies &&
            movies.map(movie => (
                <li className='movies__item' key={movie.id}>
                    <Link
                    className="movie__link"
                    to={{
                        pathname: `/movies/${movie.id}`,
                        state: {
                        from: location,
                        },
                    }}
                    >
                        {movie.title ?? movie.name}
                    </Link>
                </li>
            ))}
        </ul>
    );
}

MovieList.propTypes = {
    movies: PropTypes.array,
  };