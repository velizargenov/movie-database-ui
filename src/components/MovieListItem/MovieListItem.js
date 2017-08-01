import React from 'react'
import PropTypes from 'prop-types'
import './MovieListItem.css'
import {
  formatTitle,
  formatAvarageVote,
  formatReleaseYear,
  formatOverview,
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
        <h1>{formatTitle(details.title)}</h1>
        <h2>{formatReleaseYear(details.release_date)}</h2>
        <img src={formatImage(details.poster_path)} alt="" width="200px" />
        <p>{formatOverview(details.overview)}</p>
        <div>
          <span>Vote avarage: {formatAvarageVote(details.vote_average)}</span>
        </div>
        <hr />
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
