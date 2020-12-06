import React, { Component } from  'react';
import SearchBar from './SearchBar/SearchBar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
    };
  }

  updateSearchTerm(term) {
    this.setState({
      searchTerm: term
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("Hello world!");
  }
/* 
    const {title, url, description, rating} = this.state;
    const bookmark = {title, url, description, rating};
    const url ='https://tf-ed-bookmarks-api.herokuapp.com/v3/bookmarks';
    const options = {
      method: 'POST',
      body: JSON.stringify(bookmark),
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer $2a$10$ZhdeJefcb.5sx/DCmO/n8u5sJLcARAdbHw9tfm1mevGRq3s1.5DpW"
      }
    };

    fetch(url, options)
      .then(res => {
        if(!res.ok) {
          throw new Error('Something went wrong, please try again later');
        }
        return res.json();
      })
      .then(data => {
        this.setState({
          title: "",
          url: "",
          description: "",
          rating: 1
        });
        this.props.handleAdd(bookmark);
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
     
  }
*/   

  render() {  
    return (
      <main className='App'>
        <h1>Google Book Search</h1>
        <SearchBar
          searchTerm={this.state.searchTerm}
//          filterOption={this.state.filterOption}
          handleUpdate={term=>this.updateSearchTerm(term)}
          clickSubmit={e=>this.handleSubmit(e)}
//          handleFilterChange={option => this.updateFilterOption(option)}

        />        
      </main>
    );
  }
}

export default App;
