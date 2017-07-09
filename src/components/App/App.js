import React from 'react'

import Search from '../Search/Search'
import MovieList from '../MovieList/MovieList'

import { fetchPopularMovies } from '../../services/api'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.getInputValue = this.getInputValue.bind(this)
    this.filterMovies = this.filterMovies.bind(this)

    // get initial state
    this.state = {
      movies: [],
      searchValue: ''
    }
  }

  componentDidMount() {
    fetchPopularMovies().then(data => {
      this.setState({
        movies: data.results,
      })
    })
  }

  getInputValue(contnetFromChild) {
    this.setState({
      searchValue: contnetFromChild
    })
  }

  filterMovies() {
    return {
      movie1: {
        title: 'A beautiful Mind',
        image: 'https://dd6zx4ibq538k.cloudfront.net/static/images/2395/941b9491b9e6413cf2676809d9762451_673_1000.jpeg',
        releaseDate: 2001,
        rating: 8.2,
        duration: 135,
        genre: ['Biography', 'Drama'],
        director: 'Ron Howard',
        stars: ['Russell Crowe', 'Ed Harris', 'Jennifer Connelly', 'Christopher Plummer'],
        bio: 'After John Nash, a brilliant but asocial mathematician, accepts secret work in cryptography, his life takes a turn for the nightmarish.'
      }
    }
  }

  render() {
    const searchResult = this.filterMovies()
    return (
      <div className="main">
        This is App!
        <Search getInputValue={this.getInputValue} state={this.state} />
        {
          this.state.searchValue === ''
            ? <MovieList movies={this.state.movies} props={this.state.movies}/>
            : <MovieList movies={searchResult} props={searchResult} />
        }
      </div>
    )
  }
}

export default App
