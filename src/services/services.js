const searchMovieFunc = async (searchMovieWord) => {
  const response = await fetch (`http://www.omdbapi.com/?apikey=101b38c9&s=${searchMovieWord}`)
  const data = await response.json()

  if (data === []){
    alert("No movie was found")
  }

  return data
  
}
export default searchMovieFunc;
