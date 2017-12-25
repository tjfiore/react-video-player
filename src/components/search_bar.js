import React, { Component } from 'react';
import '../App.css';

class SearchBar extends Component{
  constructor(props){
    super(props); //calling parent method from Component
    this.state = { //state is a plain js object used to record and react to user event.
      term: '',
    };
  }


  render(){
    return(
      <div>
        <center>
        <input type="text"
        onChange={ (event) => this.setState({term : event.target.value}) } className="searchBar"
        placeholder="Search" />
        </center>

      </div>
    );
  }
}

export default SearchBar;
