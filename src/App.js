import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBB3IkIoIyyCcJukLX3qIK21PIvqN6ukms';

class App extends Component {


  render() {
    return (
      <div>
      <SearchBar/>
      </div>
    );
  }
}

export default App;
