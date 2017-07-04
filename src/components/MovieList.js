import React from 'react'
import MovieListItem from './MovieListItem'

class MovieList extends React.Component {
  render() {
    return (
      <div className="movie-list">
        This is MovieList!<br />
        {
          Object
            .keys(this.props.movies)
            .map(key => <MovieListItem key={key} index={key} details={this.props.movies[key]} />)
        }
      </div>
    )
  }
}

export default MovieList
