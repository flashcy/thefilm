import React from 'react';
import Card from '../components/Card';
import Header from '../components/Header';
import styles from '../styles/Home.module.css';
import Cover from '../components/Cover';

function Home() {
  const [loading, setLoading] = React.useState(true);
  const [movies, setMovies] = React.useState([]);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`)
      ).json();
    setMovies(json.data.movies);
    setLoading(false);
    console.log(json);
  };
  React.useEffect(() => {
      getMovie();
    }
  , []);
  return (
    <>
      <Header />
      <div className={styles.container}>
        {loading ? (
        <h1 style={{fontWeight:'300'}}>Loading...</h1>
        ) : (
          <>
            <Cover />
            <div className={styles.cards}>
              {movies.map((movie) => (
                <Card id={movie.id} coverImg={movie.medium_cover_image} title={movie.title} summary={movie.summary} year={movie.year}/>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Home;
