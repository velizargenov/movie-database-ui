import React from 'react'
import MovieListItem from '../MovieListItem/MovieListItem'

// class MovieList extends React.Component {
//   render() {
//     return (
//       <div className="movie-list">
//         This is MovieList!<br />
//         {
//           Object
//             .keys(this.props.movies)
//             .map(key => <MovieListItem key={key} index={key} details={this.props.movies[key]} />)
//         }
//       </div>
//     )
//   }
// }

const MovieList = ({props}) => {
  console.log('props:', props)
  return (
    <div className="movie-list">
      This is MovieList!<br />
      {
        Object
          .keys(props) // this.props.movies
          .map(key => <MovieListItem key={key} index={key} details={props[key]} />)
      }
    </div>
  )
}

export default MovieList
