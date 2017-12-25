import React, { Component } from 'react';
import '../App.css';

class SearchBar extends Component{

  render(){
    return(
      <div>
        <center>
        <input type="text" className="searchBar" placeholder="Search"/>
        </center>
      </div>
    );
  }
}

export default SearchBar;
