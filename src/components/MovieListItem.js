import React from 'react'
import MovieListItemDetails from './MovieListItemDetails'

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
    // this.setState({
    //   modalClicked: true
    // })
    const movieId = this.props.index
    this.context.router.history.push({
      pathname: `/movie/${movieId}`,
      state: { movie: this.props.details }
    })
  }

  render() {
    const { details } = this.props
    return (
      <div className="movie-list-item" onClick={() => this.goToMovie()} >
        This is MovieListItem!
        <img src={details.image} alt="" width="200px" />
        <div>
          {this.state.modalClicked ? <MovieListItemDetails details={details}/> : console.log(2)}
        </div>
      </div>
    )
  }
}

MovieListItem.contextTypes = {
  router: React.PropTypes.object
}

export default MovieListItem
