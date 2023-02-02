import './MovieList.css';

export default function MovieList({movies}) {
    return (
        <ul>
            {movies &&
            movies.map(movie => (
                <li id={movie.id}>
                    {movie.title ?? movie.name}
                </li>
            ))}
        </ul>
    );
}