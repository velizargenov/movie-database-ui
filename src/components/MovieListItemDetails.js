import React from 'react'

class MovieListItemDetails extends React.Component {
  render() {
    console.log(this)
    return (
      <div className="movie-list-item-details">
        This is MovieListItemDetails!<br />
        <br /><br />
        <h1>{this.props.location.state.movie.title}</h1>
        <img src={this.props.location.state.movie.image} alt="" width="200px" />
        {/* <h1>{this.props.details.title}</h1>
        <img src={this.props.details.image} alt="" width="200px" /> */}
      </div>
    )
  }
}

MovieListItemDetails.contextTypes = {
  router: React.PropTypes.object
}
export default MovieListItemDetails
