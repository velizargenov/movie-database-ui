import React from 'react'

import Search from '../Search/Search'
import MovieList from '../MovieList/MovieList'

import { fetchPopularMovies, fetchSearchedMovies } from '../../services/api'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.getInputValue = this.getInputValue.bind(this)
    this.getSearchResult = this.getSearchResult.bind(this)

    // get initial state
    this.state = {
      movies: [],
      searchValue: '',
      searchResult: []
    }
  }

  componentDidMount() {
    fetchPopularMovies().then(data => {
      this.setState({
        movies: data.results,
      })
    })
  }

  getInputValue(searchValue) {
    this.setState({
      searchValue: searchValue
    })
  }

  getSearchResult(searchResult) {
    this.setState({
      searchResult: searchResult
    })
  }

  render() {
    return (
      <div className="main">
        This is App!
        <Search getInputValue={this.getInputValue} getSearchResult={this.getSearchResult} updateSearchState={this.updateSearchState} state={this.state} />
        {
          this.state.searchValue === ''
            ? <MovieList movies={this.state.movies} props={this.state.movies}/>
            : <MovieList movies={this.state.searchResult} props={this.state.searchResult}/>
        }
      </div>
    )
  }
}

export default App
