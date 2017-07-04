import React from 'react'
import MovieList from './MovieList'
import sampleMovies from '../sample-movies'

class App extends React.Component {
  constructor() {
    super()

    // get initial state
    this.state = {
      movies: sampleMovies
    }
  }

  loadSamples() {
    this.setState({
      movies: sampleMovies
    })
  }

  render() {
    return (
      <div className="main">
        This is App!
        <MovieList movies={this.state.movies}/>
      </div>
    )
  }
}

export default App
