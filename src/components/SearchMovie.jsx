import { useEffect, useState, useRef } from 'react'
import searchMovieFunc from '../services/services'
import style from './SearchMovie.module.css'

const SearchMovie = ({setResults}) => {
  const [searchMovie, setSearchMovie] = useState('')
  const inputRef = useRef("")

  // 1. uzsetinti paieskos zodi i state
  const handleSearchMovie = (e) => {
    e.preventDefault();
    setSearchMovie(inputRef.current.value)
    // console.log(inputRef.current.value)
    getMovies(searchMovie)
  }

  // 2. funkcija kuri kreipiasi i services api
  const getMovies = (searchMovie) => {
    searchMovieFunc(searchMovie).then(res => {
      setResults(res);
    })
  }

    // 3. useEffect, kuri stebi, kada kreiptis i api
  useEffect(() => {
    getMovies(searchMovie)
  }, [searchMovie])

  return (
    <div className={style.searchDiv}>
      <h1 className={style.title}>Search for a movie</h1>
      <input className={style.searchField}
        type="text"
        ref={inputRef}
        placeholder="Search for movie"
      />
      <button
        onClick={handleSearchMovie}
        className={style.searchButton}
        >Search</button>
    </div>
  )
}

export default SearchMovie