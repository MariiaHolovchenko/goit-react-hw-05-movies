import { movieActors } from '../../services/movies-api';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styles from '../Cast/Cast.module.css'

const Cast = () => {
  const [actors, setActors] = useState(null);
  const { movieId } = useParams();
  useEffect(() => {
    movieActors(movieId).then(res => setActors(res));
  }, [movieId]);

  return (
    <ul className={styles.list}>
      {actors &&
        actors.cast.map(actor => (
          <li className={styles.link} key={actor.cast_id}>
            <img className={styles.img} src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`} alt="Actor" />
            <p>{actor.name}</p>
            <p>Character:{actor.character}</p>
          </li>
        ))}
    </ul>
  );
};
export default Cast;
