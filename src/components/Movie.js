import React from 'react'

class Movie extends React.Component {
  render() {
    console.log('this: ', this)
    return (
      <div className="movie">
        This is Movie!
      </div>
    )
  }
}

export default Movie
