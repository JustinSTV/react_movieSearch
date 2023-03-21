import React, { useState } from "react";
import searchSpecificMovie from "../services/SearchSpecificMovie";
import MovieModal from "./MovieModal";
import style from "./OneMovie.module.css";

const OneMovie = (props) => {
  const apiMovies = props.movieFromApi.Search
  console.log(apiMovies, "apiMovies");


  const [results, setResults] = useState(true)
  const [oneMovie, setOneMovie] = useState(true)

  const getMovieByID = (movieID) => {
    console.log(movieID, "movieID");

    if(results === false){
      setResults(true)
    }
    setOneMovie(false)
    searchSpecificMovie(movieID).then((data) => {
      console.log(data, "data")
      setResults(data);
    });
  }
console.log(results, "results")
  return(
    <div className={style.movieList}>
      {
        apiMovies?.map((movieItem, index) => {
          return(
            <div key={index} className={style.oneMovie}>
              <h2>{movieItem.Title} ({movieItem.Year})</h2>
              <img src={movieItem.Poster} alt={movieItem.Title} />
              <button onClick={() => getMovieByID(movieItem.imdbID)}
                className={style.moreBtn}
              >more</button>
            </div>
          )
        })
      }
      {
        oneMovie ? null : <MovieModal closeModal={setOneMovie} oneMovie={results} />
      }
    </div>
  ) 
};
export default OneMovie;

