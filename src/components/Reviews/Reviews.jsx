import { movieReviews } from '../../services/movies-api';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styles from './Reviews.module.css';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  useEffect(() => {
    movieReviews(movieId).then(res => {
      setReviews(res);
    });
  }, [movieId]);

  return (
    <>
      {reviews && reviews.length > 0 && (
        <ul className={styles.list}>
          {reviews.map(result => (
            <li className={styles.link} key={result.id}>
              <h3>{result.author}</h3>
              <p className={styles.review_content}>{result.content}</p>
            </li>
          ))}
        </ul>
      )}
      {reviews && reviews.length === 0 && <p>No reviews found</p>}
    </>
  );
};
export default Reviews;
