import React from 'react'
import style from './MovieModal.module.css'


const MovieModal = ({closeModal, oneMovie}) => {
 
  console.log(oneMovie, "onemovie");

  
  return (
    <div className={style.modalBack}>
      <div className={style.modalContainer}>
        <div className={style.modalContent}>
          <div className={style.posterCon}>
            <img src={oneMovie.Poster} alt={oneMovie.Title} />
          </div>
          <h2>TITLE: {oneMovie.Title} ({oneMovie.Year})</h2>
          <h3>GENRE: {oneMovie.Genre}</h3>
          <p>COUNTRY: {oneMovie.Country}</p>
          <p className={style.plot}>{oneMovie.Plot}</p>
          <p>IMDB RATING: <strong>{oneMovie.imdbRating}</strong></p>
        </div>
      </div>
      <div className={style.btnCon}>
        <button onClick={() => closeModal(true)}>Back</button>
      </div>
    </div>
  )
}

export default MovieModal