import React from 'react'

class MovieList extends React.Component {
  render() {
    const { details } = this.props
    return (
      <div className="movie">
        This is MovieList!<br />
        <img src={details.image} width="200px" />
      </div>
    )
  }
}

export default MovieList
