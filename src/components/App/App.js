import React from 'react'

import Search from '../Search/Search'
import MovieList from '../MovieList/MovieList'
import sampleMovies from '../../sample-movies'

class App extends React.Component {
  constructor() {
    super()

    this.getInputValue = this.getInputValue.bind(this)

    // get initial state
    this.state = {
      movies: sampleMovies,
      searchValue: ''
    }
  }

  getInputValue(contnetFromChild) {
    this.setState({
      // movies: sampleMovies,
      searchValue: contnetFromChild
    })
  }

  render() {
    return (
      <div className="main">
        This is App!
        <Search getInputValue={this.getInputValue} state={this.state} />
        {
          this.state.searchValue === ''
            ? <MovieList movies={this.state.movies} props={this.state.movies}/>
            : <div>No elements</div>
        }
      </div>
    )
  }
}

export default App
