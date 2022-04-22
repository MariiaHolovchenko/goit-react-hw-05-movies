import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { moviesTrending } from '../../services/movies-api';
import styles from '../HomePage/HomePage.module.css'
const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = () => {
    moviesTrending().then(res => {
      setMovies([...res.data.results]);
    });
  };

  return (
    <ul className={styles.list}>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link className={styles.link} to={`/movies/${movie.id}`}>{movie.title || movie.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default HomePage;
