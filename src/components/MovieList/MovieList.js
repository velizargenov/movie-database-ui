import React from 'react'
import PropTypes from 'prop-types'
import MovieListItem from '../MovieListItem/MovieListItem'
import './MovieList.css'

const MovieList = ({props, type}) => {
  const title = type === 'most-popular' ? 'Most Popular' : 'Your search result'
  return (
    <div className="movie-list">
      <h1 className="title">{title}</h1>
      <ul>
        {
          props.map(movie => <MovieListItem key={movie.id} index={movie.id} details={movie} />)
        }
      </ul>
    </div>
  )
}

MovieList.propTypes = {
  props: PropTypes.array.isRequired
}

export default MovieList
