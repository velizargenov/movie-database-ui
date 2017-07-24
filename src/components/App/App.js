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

  getInputValue(searchValue) {
    this.setState({
      searchValue: searchValue
    })
  }

  filterMovies() {
    return [{
      "vote_count": 8380,
      "id": 76341,
      "video": false,
      "vote_average": 7.2,
      "title": "Mad Max: Fury Road",
      "popularity": 38.628602,
      "poster_path": "/kqjL17yufvn9OVLyXYpvtyrFfak.jpg",
      "original_language": "en",
      "original_title": "Mad Max: Fury Road",
      "genre_ids": [
        28,
        12,
        878,
        53
      ],
      "backdrop_path": "/phszHPFVhPHhMZgo0fWTKBDQsJA.jpg",
      "adult": false,
      "overview": "An apocalyptic story set in the furthest reaches of our planet, in a stark desert landscape where humanity is broken, and most everyone is crazed fighting for the necessities of life. Within this world exist two rebels on the run who just might be able to restore order. There's Max, a man of action and a man of few words, who seeks peace of mind following the loss of his wife and child in the aftermath of the chaos. And Furiosa, a woman of action and a woman who believes her path to survival may be achieved if she can make it across the desert back to her childhood homeland.",
      "release_date": "2015-05-13"
    }]
  }

  render() {
    const searchResult = this.filterMovies()
    console.log(this.state.movies)
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
