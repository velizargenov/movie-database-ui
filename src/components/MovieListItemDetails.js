import React from 'react'
import sampleMovies from '../sample-movies'

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

    setTimeout(() => {
      this.setState({
        loading: false,
        movie: sampleMovies[movieId]
      })
    }, 1000)
  }

  renderContent() {
    if (this.state.loading) {
      return (
        <div>
          <img src="https://d1m54pdnjzjnhe.cloudfront.net/pngineer/640edca0-616b-11e7-86a2-695af5a15c90.gif" alt="spinner" width="200px" />
        </div>
      )
    } else {
      return (
        <div>
          <h1>{this.state.movie.title}</h1>
          <img src={this.state.movie.image} alt="" width="200px" />
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
