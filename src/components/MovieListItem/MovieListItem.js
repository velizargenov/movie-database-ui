import React from 'react'
import PropTypes from 'prop-types'
import './MovieListItem.css'

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
    const image = !details.poster_path
      ? 'https://dd6zx4ibq538k.cloudfront.net/static/images/2395/b455a76cdf770ca4eff883dbd23cbb79_440_656.jpeg'
      : `https://image.tmdb.org/t/p/w300_and_h450_bestv2/${details.poster_path}`

    const voteAvarage = Number((details.vote_average).toFixed(2))
    const releaseYear = details.release_date.split('-')[0]

    return (
      <li className="movie-list-item" onClick={() => this.goToMovie()} >
        <h1>{details.title}</h1>
        <h2>{releaseYear}</h2>
        <img src={image} alt="" width="200px" />
        <p>{details.overview}</p>
        <div>
          <span>Vote avarage: {voteAvarage}</span><br />
          <span>Vote count: {details.vote_count}</span>
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
