import React from 'react'
import PropTypes from 'prop-types'
import './MovieListItem.css'
import {
  formatTitle,
  formatAvarageVote,
  formatReleaseYear,
  formatVoteCount,
  formatImage
} from '../../helpers'

class MovieListItem extends React.Component {
  constructor() {
    super()

    this.goToMovie = this.goToMovie.bind(this)

    this.state = {
      modalClicked: false
    }
  }

  goToMovie() {
    this.context.router.history.push(`/movie/${this.props.index}`)
  }

  render() {
    const { details } = this.props

    return (
      <li className="movie-list-item" onClick={() => this.goToMovie()} >
        <img src={formatImage(details.poster_path)} alt="" width="200px" />
        <div>{formatAvarageVote(details.vote_average)}</div>
        <span className="movie-list-item-title">{formatTitle(details.title)}</span>
        <span className="movie-list-item-release-year">{formatReleaseYear(details.release_date)}</span>
      </li>
    )
  }
}

MovieListItem.contextTypes = {
  router: PropTypes.object
}

MovieListItem.propTypes = {
  index: PropTypes.number.isRequired,
  details: PropTypes.object.isRequired
}

export default MovieListItem
