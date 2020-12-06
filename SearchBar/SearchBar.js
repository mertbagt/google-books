import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <div className="searchBar" >
        <div className="searchBar">
          <label htmlFor="search">Search:</label>  
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search term" 
            value={this.props.searchTerm}
            onChange={e => this.props.handleUpdate(e.target.value)}
            required/>
          <button onClick={e => this.props.clickSubmit(e)}>Search</button>  
        </div>
        <p>{this.props.searchTerm}</p>
      </div>
    )
  }
}

export default SearchBar;