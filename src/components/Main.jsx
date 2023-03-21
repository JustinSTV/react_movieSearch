import React, { useState } from 'react'
import OneMovie from './OneMovie';
import SearchMovie from './SearchMovie';

const Main = () => {
  const [movieFromApi, setMovieFromApi] = useState([])

  const setResults = (data) => {
    setMovieFromApi(data);
  }
  console.log(movieFromApi);

  return (
    <div>
      <SearchMovie setResults={setResults}/>
      <OneMovie movieFromApi={movieFromApi}/>
    </div>
  )
}

export default Main