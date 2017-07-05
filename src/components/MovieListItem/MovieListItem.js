import React from 'react'
import PropTypes from 'prop-types'

class MovieListItem extends React.Component {
  constructor() {
    super()

    this.goToMovie = this.goToMovie.bind(this)

    this.state = {
      modalClicked: false
    }
  }

  goToMovie() {
    console.log('You changed the URL')
    this.context.router.history.push(`/movie/${this.props.index}`)
  }

  render() {
    const { details } = this.props
    return (
      <div className="movie-list-item" onClick={() => this.goToMovie()} >
        This is MovieListItem!
        <img src={details.image} alt="" width="200px" />
      </div>
    )
  }
}

MovieListItem.contextTypes = {
  router: PropTypes.object
}

export default MovieListItem
