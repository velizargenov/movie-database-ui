import React from 'react'
import PropTypes from 'prop-types'
import { fetchMovieDetails } from '../../services/api'

import {
  formatTitle,
  formatAvarageVote,
  formatReleaseYear,
  formatVoteCount,
  formatImage,
  formatImdbLink
} from '../../helpers'

class MovieListItemDetails extends React.Component {
  constructor() {
    super()

    this.state = {
      loading: true,
      movie: {}
    }
  }

  componentDidMount() {
    const movieId = this.props.location.pathname.split('/')[2]
    fetchMovieDetails(movieId).then(data => {
      this.setState({
        loading: false,
        movie: data,
      })
    })
  }

  goBack() {
    this.props.history.push('/')
  }

  renderContent() {
    if (this.state.loading) {
      return (
        <div>
          <img src="https://d1m54pdnjzjnhe.cloudfront.net/pngineer/640edca0-616b-11e7-86a2-695af5a15c90.gif" alt="spinner" width="200px" />
        </div>
      )
    } else {
      const { title, poster_path, overview, vote_average, vote_count, imdb_id, release_date } = this.state.movie
      return (
        <div>
          <h1>{formatTitle(title)}</h1>
          <h2>{release_date}</h2>
          <img src={formatImage(poster_path)} alt="" width="200px" />
          <p>{overview}</p>
          <div>
            <span>Vote avarage: {formatAvarageVote(vote_average)}</span><br />
            <span>Vote count: {formatVoteCount(vote_count)}</span>
          </div>
          <a href={formatImdbLink(imdb_id)} target="_blank">IMDB Link</a>
          <button onClick={() => this.goBack()}>Go back</button>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="movie-list-item-details">
        { this.renderContent() }
      </div>
    )
  }
}

MovieListItemDetails.propTypes = {
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}

export default MovieListItemDetails
