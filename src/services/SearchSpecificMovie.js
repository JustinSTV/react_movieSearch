const searchSpecificMovie = async (searchMovieWord) => {
  const response = await fetch (`http://www.omdbapi.com/?apikey=101b38c9&i=${searchMovieWord}`)
  const data = await response.json()

  // console.log(data + ' ' + 'direct request')

  if (data === []){
    alert("No movie was found")
  }

  return data
}

export default searchSpecificMovie;