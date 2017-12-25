import React, { Component } from 'react';


class SearchBar extends Component{
  constructor(props){
    super(props); //calling parent method from Component
    this.state = { //state is a plain js object used to record and react to user event.
      term: '',
    };
  }

  onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

  render(){
    return(
      <div className="search-bar">
        <center>
        <input type="text"
        value={this.state.term}
        onChange={event => this.onInputChange(event.target.value)}
        placeholder="Search" />
        </center>

      </div>
    );
  }
}

export default SearchBar;
