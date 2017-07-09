import React from 'react'
import MovieListItem from '../MovieListItem/MovieListItem'

const MovieList = ({props}) => {
  return (
    <div className="movie-list">
      This is MovieList!<br />
      {
        props.map(movie => <MovieListItem key={movie.id} index={movie.id} details={movie} />)
      }
    </div>
  )
}

export default MovieList
