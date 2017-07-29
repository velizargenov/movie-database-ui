import React from 'react'
import MovieListItem from '../MovieListItem/MovieListItem'
import './MovieList.css'

const MovieList = ({props, type}) => {
  const title = type === 'most-popular' ? 'Most Popular' : 'Your search result'
  return (
    <div className="movie-list">
      <h1>{title}</h1>
      <ul>
        {
          props.map(movie => <MovieListItem key={movie.id} index={movie.id} details={movie} />)
        }
      </ul>
    </div>
  )
}

export default MovieList
