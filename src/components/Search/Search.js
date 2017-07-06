import React from 'react'

class Search extends React.Component {
  render() {
    return (
      <div className="search">
        <input
          type="text"
          placeholder="Search..."
          onChange={() => {this.props.getInputValue(this.searchInput.value)}}
          ref={(input) => { this.searchInput = input }}
        />

        <br /><br /><br /><br /><br />
      </div>
    )
  }
}

export default Search
