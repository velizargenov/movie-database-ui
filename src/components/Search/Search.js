import React from 'react'
import { fetchSearchedMovies } from '../../services/api'
import lodash from 'lodash'
import './Search.css'

class Search extends React.Component {
  constructor() {
    super()

    this.getResult = this.getResult.bind(this)
  }

  getResult(searchValue) {
    this.props.getInputValue(searchValue)
    if (searchValue !== '') {
      fetchSearchedMovies(searchValue).then(data => {
        if (data) {
          this.props.getSearchResult(data.results)
        }
      })
    }
  }

  render() {
    return (
      <div className="search">
        <input
          type="text"
          placeholder="Search..."
          onChange={lodash.debounce(() => {this.getResult(this.searchInput.value)}, 500)}
          ref={(input) => { this.searchInput = input }}
        />
      </div>
    )
  }
}

export default Search
