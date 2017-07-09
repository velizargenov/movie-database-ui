import React from 'react'

import { fetchMovieDetails } from '../../services/api'

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

    this.setState({
      movie: fetchMovieDetails(movieId).then(data => {
        this.setState({
          loading: false,
          movie: data,
        })
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
      const image = `https://image.tmdb.org/t/p/w300_and_h450_bestv2/${this.state.movie.poster_path}`
      return (
        <div>
          <h1>{this.state.movie.title}</h1>
          <img src={image} alt="" width="200px" />
          <button onClick={() => this.goBack()}>Go back</button>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="movie-list-item-details">
        This is MovieListItemDetails!<br /><br /><br />
        { this.renderContent() }
      </div>
    )
  }
}

export default MovieListItemDetails
