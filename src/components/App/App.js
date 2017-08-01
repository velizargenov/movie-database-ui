import React from 'react'
import Search from '../Search/Search'
import MovieList from '../MovieList/MovieList'
import { fetchPopularMovies } from '../../services/api'
import './App.css'

class App extends React.Component {
  constructor() {
    super()

    this.getInputValue = this.getInputValue.bind(this)
    this.getSearchResult = this.getSearchResult.bind(this)

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
    const type = this.state.searchValue ? 'search-results' : 'most-popular'
    return (
      <div className="main">
        <header></header>
        <Search
          getInputValue={this.getInputValue}
          getSearchResult={this.getSearchResult}
        />
        {
          this.state.searchValue === ''
            ? <MovieList props={this.state.movies} type={type} />
            : <MovieList props={this.state.searchResult} type={type} />
        }
      </div>
    )
  }
}

export default App
