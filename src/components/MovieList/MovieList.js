import './MovieList.css';

export default function MovieList({movies}) {
    return (
        <ul>
            {movies &&
            movies.map(movie => (
                <li>
                    {movie.title ?? movie.name}
                </li>
            ))}
        </ul>
    );
}