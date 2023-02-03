import { Link, useLocation } from 'react-router-dom';
import './MovieList.css';

export default function MovieList({movies}) {
    let location = useLocation();
    return (
        <ul>
            {movies &&
            movies.map(movie => (
                <li key={movie.id}>
                    <Link
                    className="movie__link"
                    to={{
                        pathname: `/movies/${movie.id}`,
                        state: {
                        from: location,
                        },
                    }}
                    ></Link>
                    {movie.title ?? movie.name}
                </li>
            ))}
        </ul>
    );
}