import React from 'react'
import MovieList from './MovieList'
import sampleMovies from '../sample-movies'

class App extends React.Component {
  constructor() {
    super()

    this.loadSamples = this.loadSamples.bind(this)

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
    console.log(this)
    return (
      <div className="main">
        This is App!
        {
          Object
            .keys(this.state.movies)
            .map(key => <MovieList key={key} index={key} details={this.state.movies[key]} />)
        }
      </div>
    )
  }
}

export default App
