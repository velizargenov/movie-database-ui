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
    const image = `https://image.tmdb.org/t/p/w300_and_h450_bestv2/${details.poster_path}`
    const voteAvarage = Number((details.vote_average).toFixed(2))
    const releaseYear = details.release_date.split('-')[0]

    return (
      <div className="movie-list-item" onClick={() => this.goToMovie()} >
        This is MovieListItem!
        <h1>{details.title}</h1>
        <h2>{releaseYear}</h2>
        <img src={image} alt="" width="200px" />
        <p>{details.overview}</p>
        <div>
          <span>Vote avarage: {voteAvarage}</span><br />
          <span>Vote count: {details.vote_count}</span>
        </div>
        <hr />
      </div>
    )
  }
}

MovieListItem.contextTypes = {
  router: PropTypes.object
}

export default MovieListItem
